import NoteCard from "./NoteCard";

// List of notes with optional empty state
export default function NotesList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className="card card-empty">
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <p className="empty-state-title">No notes yet</p>
          <p className="empty-state-text">
            Click "Add Note" to create your first one.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
