import { useNotes } from "../context/NotesContext";

function NoteList() {
  const { notes } = useNotes();

  if (notes.length === 0) {
    return <p>No Notes Yet</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.text}</div>
      ))}
    </div>
  );
}

export default NoteList;
