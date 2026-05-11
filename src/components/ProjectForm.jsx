import { useState } from 'react';

const initialFormState = {
  title: '',
  client: '',
  category: '',
  description: '',
  tags: ''
};

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.client.trim() || !formData.description.trim()) {
      setError('Title, client, and description are required.');
      return;
    }

    onAddProject({
      title: formData.title.trim(),
      client: formData.client.trim(),
      category: formData.category.trim() || 'General',
      description: formData.description.trim(),
      tags: formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
    });

    setFormData(initialFormState);
    setError('');
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add a New Project</h3>
      <div className="form-row">
        <label htmlFor="title">Project title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Ex: App redesign for Orion"
        />
      </div>

      <div className="form-row">
        <label htmlFor="client">Client name</label>
        <input
          id="client"
          name="client"
          value={formData.client}
          onChange={handleChange}
          placeholder="Ex: Orion Agency"
        />
      </div>

      <div className="form-row">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Ex: UX design"
        />
      </div>

      <div className="form-row">
        <label htmlFor="description">Project description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the project and outcome"
          rows="4"
        />
      </div>

      <div className="form-row">
        <label htmlFor="tags">Tags (comma-separated)</label>
        <input
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Ex: branding, ux, design"
        />
      </div>

      {error && <p className="form-error">{error}</p>}
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
