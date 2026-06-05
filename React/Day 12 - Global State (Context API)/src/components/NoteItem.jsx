import { useNotes } from "../context/NotesContext";

function NoteItem({ note }) {

  const { deleteNote } =
    useNotes();

  return (

    <div>

      <p>{note.text}</p>

      <button
        onClick={() =>
          deleteNote(note.id)
        }
      >
        Delete
      </button>

    </div>

  );
}

export default NoteItem;