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

  const cardClasses = featured
    ? 'fade-in stagger rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col h-full bg-white'
    : 'fade-in stagger rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col h-full bg-white';

  const contentPadding = featured ? 'p-3' : 'p-5';
  const titleSize = featured ? 'text-base' : 'text-xl';
  const descriptionSize = featured ? 'text-xs' : 'text-sm';
  const badgeGap = featured ? 'gap-1' : 'gap-2';
  const maxTech = featured ? 3 : 4;

  return (
    <article className={cardClasses} style={style}>
      {/* Thumbnail */}
      <div
        className="w-full"
        style={thumbStyle}
        aria-label={`${project.name} preview`}
      />

      {/* Content */}
      <div className={`${contentPadding} flex-1 flex flex-col items-center text-center`}>
        <h3 className={`${titleSize} font-semibold mb-2 text-white`}>{project.name}</h3>
        <p className={`${descriptionSize} mb-4 flex-1 text-gray-300 px-2`}>
          {project.description || project.tagline}
        </p>

        {/* Tech Badges */}
        {project.techStack.length > 0 && (
          <div className={`flex flex-wrap ${badgeGap} mb-4 justify-center`}>
            {project.techStack.slice(0, maxTech).map(tech => (
              <TechBadge key={tech} tech={tech} small={featured} />
            ))}
          </div>
        )}

        {/* Link Button */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={featured ? 'btn btn-sm text-xs w-full text-center' : 'btn text-sm w-full text-center'}
        >
          View Project
        </a>
      </div>
    </article>
  );
}