// Filter bar with tag buttons
export default function FilterBar({ selectedTag, onSelectTag, onClear }) {
  const tags = ["work", "ideas", "personal", "study"];

  return (
    <div className="filter-bar my-5">
      <span className="filter-label">Filter:</span>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`tag tag-${tag} tag-btn ${selectedTag === tag ? "opacity-100" : "opacity-60"}`}
          onClick={() => onSelectTag(selectedTag === tag ? null : tag)}
        >
          #{tag}
        </button>
      ))}
      {selectedTag && (
        <button className="btn btn-ghost text-xs" onClick={onClear}>
          Clear
        </button>
      )}
    </div>
  );
}
