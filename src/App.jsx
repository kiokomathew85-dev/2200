import { useMemo, useState } from 'react';
import ProjectCard from './components/ProjectCard.jsx';
import ProjectForm from './components/ProjectForm.jsx';
import SearchBar from './components/SearchBar.jsx';

const initialProjects = [
  {
    id: 1,
    title: 'Brand Refresh for Nova Studio',
    client: 'Nova Studio',
    category: 'Branding',
    description: 'Complete brand refresh including logo, website concept, and digital launch strategy.',
    tags: ['branding', 'visual', 'strategy']
  },
  {
    id: 2,
    title: 'Landscape Photography Showcase',
    client: 'Firefly Media',
    category: 'Web Design',
    description: 'Minimal photography portfolio website with interactive gallery and responsive layouts.',
    tags: ['design', 'photography', 'web']
  },
  {
    id: 3,
    title: 'E-commerce UI for BloomMarket',
    client: 'BloomMarket',
    category: 'E-commerce',
    description: 'Conversion-focused online storefront with product cards, reviews, and checkout flow.',
    tags: ['e-commerce', 'ux', 'ui']
  }
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    if (!normalized) return projects;

    return projects.filter((project) => {
      return [project.title, project.client, project.category, project.description, ...(project.tags || [])]
        .join(' ')
        .toLowerCase()
        .includes(normalized);
    });
  }, [projects, searchTerm]);

  const handleAddProject = (newProject) => {
    setProjects((current) => [
      { id: Date.now(), ...newProject },
      ...current
    ]);
    setSearchTerm('');
  };

  return (
    <div className="app-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Creative Agency Portfolio</p>
          <h1>Showcase work with a polished portfolio platform.</h1>
          <p className="hero-description">
            Explore featured projects, search instantly, and add new case studies in a responsive single-page experience.
          </p>
        </div>
        <div className="hero-stats">
          <div>
            <strong>{projects.length}</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>Responsive</strong>
            <span>Mobile-first layout</span>
          </div>
          <div>
            <strong>Easy</strong>
            <span>Manage work dynamically</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="actions-panel">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <ProjectForm onAddProject={handleAddProject} />
        </section>

        <section className="projects-grid-section">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Use search or add a new project to update the list instantly.</p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No projects match your search.</h3>
              <p>Try different keywords or add a new portfolio item below.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
