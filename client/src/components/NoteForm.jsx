// Layout-only form for adding/editing notes
const NoteForm = ({ isEditing = false, note = null, onCancel = () => {} }) => {
  return (
    <div className="card border-accent/40">
      <p className="section-label mb-4">
        {isEditing ? "Edit Note" : "Add New Note"} · Form
      </p>
      <form className="space-y-3">
        <div className="field">
          <label htmlFor="title" className="label label-required">
            Title
          </label>
          <input
            className="input"
            type="text"
            id="title"
            placeholder="e.g. React Hook Form notes..."
            defaultValue={note?.title || ""}
          />
        </div>
        <div className="field">
          <label htmlFor="content" className="label label-required">
            Content
          </label>
          <textarea
            className="textarea"
            id="content"
            rows="3"
            placeholder="Write your note here..."
            defaultValue={note?.content || ""}
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="field">
            <label htmlFor="tag" className="label">
              Tag
            </label>
            <select
              className="select"
              id="tag"
              defaultValue={note?.tag || "personal"}
            >
              <option value="work">work</option>
              <option value="ideas">ideas</option>
              <option value="personal">personal</option>
              <option value="study">study</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <button type="submit" className="btn btn-primary flex-1">
              {isEditing ? "Update" : "Save Note"}
            </button>
            <button type="button" className="btn btn-ghost" onClick={onCancel}>
              {isEditing ? "Discard" : "Cancel"}
            </button>
          </div>
        </div>
        {/* Example error message (layout only) */}
        {false && (
          <p className="field-error">⚠ Title must be at least 3 characters</p>
        )}
      </form>
    </div>
  );
};

export default NoteForm;
