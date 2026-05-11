function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <header>
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          <h3>{project.title}</h3>
        </div>
      </header>
      <div className="project-body">
        <p className="project-client">Client: {project.client}</p>
        <p>{project.description}</p>
      </div>
      {project.tags?.length > 0 && (
        <footer className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={`${tag}-${index}`} className="tag-pill">
              {tag}
            </span>
          ))}
        </footer>
      )}
    </article>
  );
}

export default ProjectCard;
