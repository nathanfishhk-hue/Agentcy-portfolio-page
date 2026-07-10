import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard';

interface Props {
  projects: Project[];
}

export default function FeaturedRow({ projects }: Props) {
  if (projects.length === 0) return null;

  return (
    <section className="py-16 border-b border-gray-900">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}