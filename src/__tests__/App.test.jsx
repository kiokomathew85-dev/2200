import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App.jsx';

describe('App', () => {
  test('renders initial project cards and header', () => {
    render(<App />);

    expect(screen.getByText(/Creative Agency Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/Brand Refresh for Nova Studio/i)).toBeInTheDocument();
    expect(screen.getByText(/BloomMarket/i)).toBeInTheDocument();
  });

  test('filters projects when typing in the search bar', () => {
    render(<App />);

    const searchInput = screen.getByRole('searchbox');
    fireEvent.change(searchInput, { target: { value: 'e-commerce' } });

    expect(screen.getByText(/E-commerce UI for BloomMarket/i)).toBeInTheDocument();
    expect(screen.queryByText(/Brand Refresh for Nova Studio/i)).not.toBeInTheDocument();
  });

  test('adds a new project and resets the form', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Project title/i), {
      target: { value: 'Portfolio Redesign' }
    });
    fireEvent.change(screen.getByLabelText(/Client name/i), {
      target: { value: 'Atlas Creative' }
    });
    fireEvent.change(screen.getByLabelText(/Project description/i), {
      target: { value: 'A fresh portfolio experience for a modern agency.' }
    });
    fireEvent.click(screen.getByRole('button', { name: /add project/i }));

    expect(screen.getByText(/Portfolio Redesign/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project title/i)).toHaveValue('');
  });
});
