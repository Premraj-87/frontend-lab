import { useNotes } from "../context/NotesContext";
import NoteItem from "./NoteItem";

function NoteList() {

  const { notes } = useNotes();

  if (notes.length === 0) {
    return <p>No Notes Yet</p>;
  }

  return (

    <div>

      {notes.map((note) => (

        <NoteItem
          key={note.id}
          note={note}
        />

      ))}

    </div>

  );
}

export default NoteList;