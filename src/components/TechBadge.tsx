interface Props {
  tech: string;
  small?: boolean;
}

export default function TechBadge({ tech, small = false }: Props) {
  return (
    <span
      className={`px-2 py-1 text-xs font-medium bg-gray-100 text-teal rounded ${
        small ? 'px-1.5 py-0.5 text-xs' : ''
      }`}
    >
      {tech}
    </span>
  );
}