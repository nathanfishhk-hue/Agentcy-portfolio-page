import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

export default function FeaturedRow({ projects }: Props) {
  if (projects.length === 0) return null;

  return (
    <section className="py-16 border-b border-gray-200">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
          Featured Projects
        </h2>
        
        <div className="featured-carousel-container">
          <div className="featured-carousel">
            {projects.map((p, index) => (
              <div 
                key={p.slug} 
                className="featured-carousel-item featured-card"
                style={{ '--stagger-delay': `${index * 100}ms` } as React.CSSProperties}
              >
                <ProjectCard project={p} featured />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}