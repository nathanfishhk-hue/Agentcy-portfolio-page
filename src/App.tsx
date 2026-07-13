import { useState, useMemo } from 'react';
import type { Project } from './data/projects';
import { projects } from './data/projects';
import { ALL_CATEGORIES } from './data/categories';
import type { Category } from './data/categories';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedRow from './components/FeaturedRow';
import CategoryFilters from './components/CategoryFilters';
import ProjectGrid from './components/ProjectGrid';
import ProjectCarousel3D from './components/ProjectCarousel3D';
import Footer from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const featured = projects.filter((p): p is Project => p.featured);
  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <FeaturedRow projects={featured} />
      <CategoryFilters
        categories={ALL_CATEGORIES}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      {activeCategory === 'All'
        ? <ProjectCarousel3D projects={projects} />
        : <ProjectGrid projects={filtered} />
      }
      <Footer />
    </div>
  );
}