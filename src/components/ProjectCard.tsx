import type { Project } from '../data/projects';
import TechBadge from './TechBadge';

interface Props {
  project: Project;
  style?: React.CSSProperties;
}

export default function ProjectCard({ project, style }: Props) {
  const thumbStyle: React.CSSProperties = {
    aspectRatio: '16/9',
    background: project.hasThumb
      ? `url(/thumbs/${project.slug}.png)`
      : 'linear-gradient(135deg, #3AAFA9 0%, #2D9490 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <article
      className="fade-in stagger rounded-lg border border-gray-900 overflow-hidden hover:border-teal-500 transition-all flex flex-col h-full"
      style={style}
    >
      {/* Thumbnail */}
      <div
        className="w-full"
        style={thumbStyle}
        aria-label={`${project.name} preview`}
      />

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-1">
          {project.description || project.tagline}
        </p>

        {/* Tech Badges */}
        {project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map(tech => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        )}

        {/* Link Button */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-sm w-full text-center"
        >
          View Project
        </a>
      </div>
    </article>
  );
}