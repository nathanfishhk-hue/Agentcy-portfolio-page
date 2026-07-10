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
    }, 500);
  };

  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(nextCard, 5000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const getVisibleProjects = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      result.push({ ...projects[index], position: i });
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
          {/* Left button - more visible */}
          <button
            onClick={prevCard}
            className="absolute left-2 md:left-8 z-20 p-3 rounded-full bg-black border-2 border-teal text-teal hover:bg-teal hover:text-black transition-all shadow-lg"
            aria-label="Previous card"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards container */}
          <div className="flex items-center justify-center gap-4 md:gap-8 h-80 md:h-96 px-16 md:px-0">
            {getVisibleProjects().map((p, index) => {
              const isCenter = index === 1;
              const cardWidth = isCenter ? 'w-56 md:w-64' : 'w-44 md:w-56';
              return (
                <div
                  key={`${p.slug}-${currentIndex}`}
                  className={`transition-all ${
                    isAnimating 
                      ? 'opacity-0 scale-90' 
                      : 'opacity-100 scale-100'
                  }`}
                  style={{
                    transform: isCenter 
                      ? 'translateX(0) scale(1.05)' 
                      : `translateX(${index === 0 ? '-30px' : index === 2 ? '30px' : '0'}) scale(0.9)`,
                    zIndex: isCenter ? 10 : 5,
                    transition: 'all 600ms cubic-bezier(0.23, 1, 0.32, 1)',
                  }}
                >
                  <div className={cardWidth}>
                    <ProjectCard project={p} featured />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right button - more visible */}
          <button
            onClick={nextCard}
            className="absolute right-2 md:right-8 z-20 p-3 rounded-full bg-black border-2 border-teal text-teal hover:bg-teal hover:text-black transition-all shadow-lg"
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