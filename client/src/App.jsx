import { useState } from "react";
import Navbar from "./components/Navbar";
import NotesList from "./components/NotesList";
import FilterBar from "./components/FilterBar";
import { dummyNotes } from "./data/notes";
import NoteForm from "./components/noteForm";

function App() {
  const [notes, setNotes] = useState(dummyNotes);
  const [showForm, setShowForm] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [editingNote, setEditingNote] = useState(null);

  // Filter notes by selected tag
  const filteredNotes = selectedTag
    ? notes.filter((note) => note.tag === selectedTag)
    : notes;

  // Handle adding a new note
  const handleAddNote = () => {
    setEditingNote(null);
    setShowForm(!showForm);
  };

  // Handle editing a note
  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  // Handle deleting a note
  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  // Handle closing form
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingNote(null);
  };

  // Handle clearing filter
  const handleClearFilter = () => {
    setSelectedTag(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="page-wrapper">
        {/* Header with title and add button */}
        <div className="page-header">
          <div>
            <h1 className="text-xl font-normal">My Notes</h1>
            <p className="section-label mt-0.5">{filteredNotes.length} notes</p>
          </div>
          <button className="btn btn-primary" onClick={handleAddNote}>
            + Add Note
          </button>
        </div>

        {/* Filter bar */}
        <FilterBar
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
          onClear={handleClearFilter}
        />

        {/* Add/Edit form (shown when showForm is true) */}
        {showForm && (
          <div className="mb-6">
            <NoteForm
              isEditing={!!editingNote}
              note={editingNote}
              onCancel={handleCloseForm}
            />
          </div>
        )}

        {/* Notes list */}
        <NotesList
          notes={filteredNotes}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
        />
      </main>
    </div>
  );
}

export default App;
