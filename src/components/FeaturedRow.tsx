import { useState, useEffect } from 'react';
import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

export default function FeaturedRow({ projects }: Props) {
  if (projects.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(nextCard, 5000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const getVisibleProjects = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      result.push(projects[index]);
    }
    return result;
  };

  return (
    <section className="py-16 border-b border-gray-200">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
          Featured Projects
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left button */}
          <button
            onClick={prevCard}
            className="absolute left-4 z-10 p-2 rounded-full bg-black border border-teal text-teal hover:bg-teal hover:text-black transition-all"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards container */}
          <div className="flex items-center justify-center gap-8 h-96">
            {getVisibleProjects().map((p, index) => {
              const isCenter = index === 1;
              return (
                <div
                  key={`${p.slug}-${currentIndex}`}
                  className={`transition-all duration-300 ${
                    isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                  } ${isCenter ? '' : 'scale-75 opacity-50 blur-sm'}`}
                  style={{
                    transform: isCenter ? 'scale(1.1)' : 'scale(0.85)',
                    zIndex: isCenter ? 10 : 5,
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  <div className="w-64">
                    <ProjectCard project={p} featured />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right button */}
          <button
            onClick={nextCard}
            className="absolute right-4 z-10 p-2 rounded-full bg-black border border-teal text-teal hover:bg-teal hover:text-black transition-all"
            aria-label="Next card"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}