import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

export default function ProjectGrid({ projects }: Props) {
  if (projects.length === 0) {
    return (
      <section className="py-20">
        <div className="container text-center">
          <p className="text-gray-400">No projects in this category.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((p) => (
            <ProjectCard 
              key={p.slug} 
              project={p} 
              style={{ '--stagger-index': 0 } as React.CSSProperties} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}