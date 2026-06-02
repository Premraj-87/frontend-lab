import { useState } from "react";
import NoteForm from "../components/NoteForm";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";

const NotesPage = () => {
    const [notes,setNotes]=useState([]);
    const[editingNote,setEditingNote]=useState(null);
    const[searchTerm,setSearchTerm]=useState("");
    const handleAddNote=(note)=>{
        setNotes([
            ...notes,
            note
        ]);
    };

    const handleDeleteNote =(id)=>{
        const updatedNotes=
        notes.filter(
            (note)=>
                note.id !==id
        );
        setNotes(updatedNotes)
        
    }

    const handleEditNote=(note)=>{
        setEditingNote(note)
    }
    
   const handleUpdateNote = (
  updatedNote
) => {

  const updatedNotes =
    notes.map((note) =>

      note.id ===
      updatedNote.id

        ? updatedNote
        : note

    );

  setNotes(updatedNotes);

  setEditingNote(null);
  

};

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
  return (
    <div>
        <h1>Notes App</h1>
        <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />
        <NoteForm onAddNote={handleAddNote}
        editingNote={editingNote}
        onUpdateNote={handleUpdateNote}/>
        <NotesList
        notes={filteredNotes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}/>
    </div>
  )
}
export default NotesPage
