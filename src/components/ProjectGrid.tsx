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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} style={{ '--stagger-index': i } as React.CSSProperties} />
          ))}
        </div>
      </div>
    </section>
  );
}