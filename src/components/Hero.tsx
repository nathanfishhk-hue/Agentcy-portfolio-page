import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="fade-in pt-24 pb-16 text-center">
      <div className="container">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Our Work
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          17 products built for clients across AI, SaaS, and digital transformation.
          Each solves a real problem with clean code and thoughtful design.
        </p>
        <a href="#projects" className="btn">
          View Projects
        </a>
      </div>
    </section>
  );
}