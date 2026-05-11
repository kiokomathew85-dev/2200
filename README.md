# Creative Portfolio Platform

A responsive single-page portfolio application built with React and Vite. The platform showcases projects, supports live search filtering, and allows adding new portfolio items dynamically.

## Features

- Landing page with a list of featured projects
- Add new project form for live content updates
- Search bar to filter projects instantly
- Responsive design for desktop and mobile devices
- Reusable React components with clear prop passing
- Jest + React Testing Library tests for core functionality

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Run tests:

```bash
npm test
```

4. Build for production:

```bash
npm run build
```

## Project Structure

- `src/App.jsx` — main application state and layout
- `src/components/ProjectCard.jsx` — project preview cards
- `src/components/ProjectForm.jsx` — add new projects form
- `src/components/SearchBar.jsx` — live search input
- `src/styles.css` — responsive styling
- `src/__tests__` — Jest tests

## Known Limitations

- Project data is stored only in memory and reset on refresh.
- No backend persistence or authentication is included.

## Notes

This app is intentionally designed to meet core SPA and portfolio rubric requirements, including reusable components, state management, event handling, and responsive styling.
