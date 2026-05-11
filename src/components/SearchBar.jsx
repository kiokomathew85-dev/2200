function SearchBar({ value, onChange }) {
  return (
    <div className="search-card">
      <label htmlFor="project-search">Search projects</label>
      <input
        id="project-search"
        type="search"
        placeholder="Search by title, client, category, or keyword"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
