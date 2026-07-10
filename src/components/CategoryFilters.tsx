import type { Category } from '../data/categories';

interface Props {
  categories: Category[];
  active: Category | 'All';
  onChange: (cat: Category | 'All') => void;
}

export default function CategoryFilters({ categories, active, onChange }: Props) {
  return (
    <section id="projects" className="py-12">
      <div className="container">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => onChange('All')}
            className={`btn ${active === 'All' ? '' : 'btn-outline'}`}
          >
            All Projects
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`btn ${active === cat ? '' : 'btn-outline'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}