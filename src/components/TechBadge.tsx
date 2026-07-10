interface Props {
  tech: string;
  small?: boolean;
}

export default function TechBadge({ tech, small = false }: Props) {
  return (
    <span
      className={`px-2.5 py-1 font-medium bg-gray-100 text-teal rounded-md transition-all ${
        small ? 'px-2 py-0.5 text-xs' : 'px-3 py-1.5 text-sm'
      }`}
    >
      {tech}
    </span>
  );
}