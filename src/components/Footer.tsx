import { useEffect, useRef } from 'react';

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.target.classList.add('visible'),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className="fade-in py-16 border-t border-gray-900">
      <div className="container text-center">
        <p className="text-gray-400 mb-4">
          &copy; {new Date().getFullYear()} Agentcy. Leaders in Software. Experts in Intelligence.
        </p>
        <a
          href="https://agentcy.co.za"
          className="text-teal-400 hover:text-teal-300 transition-colors"
        >
          agentcy.co.za
        </a>
      </div>
    </footer>
  );
}