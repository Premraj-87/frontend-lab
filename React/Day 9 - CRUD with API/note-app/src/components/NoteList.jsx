function NotesList({
  notes,
  deleteNote,
  setEditingNote
}) {

  if (notes.length === 0) {
    return (
      <h2>No Notes Found</h2>
    );
  }

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>

          <p>{note.content}</p>

          <p>{note.category}</p>

          <button
            onClick={() =>
              deleteNote(note.id)
            }
          >
            Delete
          </button>
          <button
  onClick={() =>
    setEditingNote(note)
  }
>
  Edit
</button>
        </div>
      ))}
    </div>
  );
}

export default NotesList;