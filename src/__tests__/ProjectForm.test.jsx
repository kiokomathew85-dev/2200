import { fireEvent, render, screen } from '@testing-library/react';
import ProjectForm from '../components/ProjectForm.jsx';

describe('ProjectForm', () => {
  test('shows validation error when required fields are missing', () => {
    const handleAddProject = jest.fn();
    render(<ProjectForm onAddProject={handleAddProject} />);

    fireEvent.click(screen.getByRole('button', { name: /add project/i }));

    expect(screen.getByText(/Title, client, and description are required./i)).toBeInTheDocument();
    expect(handleAddProject).not.toHaveBeenCalled();
  });
});
