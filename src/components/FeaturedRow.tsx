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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal">
          Featured Projects
        </h2>

        {/* Cards container - all same size, no animations, no buttons */}
        <div className="flex items-start justify-center gap-6 md:gap-8 h-80 md:h-96">
          {projects.slice(0, 3).map((p) => (
            <div key={p.slug} className="w-56 md:w-64">
              <ProjectCard project={p} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}