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
    }, 350);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 350);
  };

  useEffect(() => {
    const timer = setInterval(nextCard, 5000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  // Get current project and neighbors for 3-card view
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal">
          Featured Projects
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left button */}
          <button
            onClick={prevCard}
            disabled={isAnimating}
            className="absolute left-2 md:left-8 z-20 p-3 rounded-full bg-black border-2 border-teal text-teal hover:bg-teal hover:text-black transition-all shadow-lg disabled:opacity-50"
            aria-label="Previous card"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards container - all same size */}
          <div className="flex items-start justify-center gap-4 md:gap-8 h-80 md:h-96 px-16 md:px-0">
            {getVisibleProjects().map((p, index) => (
              <div
                key={`${p.slug}-${currentIndex}`}
                className={`transition-all duration-300 ${
                  isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                }`}
                style={{
                  transition: 'opacity 350ms ease, transform 350ms ease',
                }}
              >
                <div className="w-56 md:w-64">
                  <ProjectCard project={p} featured />
                </div>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={nextCard}
            disabled={isAnimating}
            className="absolute right-2 md:right-8 z-20 p-3 rounded-full bg-black border-2 border-teal text-teal hover:bg-teal hover:text-black transition-all shadow-lg disabled:opacity-50"
            aria-label="Next card"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}