// Display a single note card
export default function NoteCard({ note, onEdit, onDelete }) {
  // Format date as "Mar 19, 2026"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="card card-hover">
      <div className="note-card-header">
        <h3 className="note-card-title">{note.title}</h3>
        <span className={`tag tag-${note.tag}`}>#{note.tag}</span>
      </div>
      <p className="note-card-body">{note.content}</p>
      <div className="note-card-footer">
        <span className="note-card-date">{formatDate(note.createdAt)}</span>
        <div className="flex gap-1">
          <button
            className="btn btn-ghost text-xs py-0.5 px-2"
            onClick={() => onEdit(note)}
          >
            Edit
          </button>
          <button
            className="btn btn-ghost text-xs py-0.5 px-2 text-danger"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
