import type { Project } from '../data/projects';
import TechBadge from './TechBadge';

interface Props {
  project: Project;
  style?: React.CSSProperties;
  featured?: boolean;
}

export default function ProjectCard({ project, style, featured = false }: Props) {
  const thumbStyle: React.CSSProperties = {
    aspectRatio: '16/9',
    background: project.hasThumb
      ? `url(/thumbs/${project.slug}.png)`
      : 'linear-gradient(135deg, #3AAFA9 0%, #2D9490 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#111',
  };

  if (featured) {
    return (
      <article
        className="fade-in stagger rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col h-full bg-white"
        style={style}
      >
        {/* Thumbnail */}
        <div
          className="w-full"
          style={thumbStyle}
          aria-label={`${project.name} preview`}
        />

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold mb-2 text-white">{project.name}</h3>
          <p className="text-xs mb-3 flex-1 text-gray-300">
            {project.description || project.tagline}
          </p>

          {/* Tech Badges */}
          {project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {project.techStack.slice(0, 3).map(tech => (
                <TechBadge key={tech} tech={tech} small />
              ))}
            </div>
          )}

          {/* Link Button */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm text-xs w-full text-center"
          >
            View Project
          </a>
        </div>
      </article>
    );
  }

  return (
    <article
      className="fade-in stagger rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col h-full bg-white"
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
        <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
        <p className="text-sm mb-4 flex-1 text-gray-300">
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