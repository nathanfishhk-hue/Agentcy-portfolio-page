interface Props {
  tech: string;
}

export default function TechBadge({ tech }: Props) {
  return (
    <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-teal-400 rounded">
      {tech}
    </span>
  );
}