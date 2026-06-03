import { useState } from "react";
import Filter from "./components/Filter";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";

const App = () => {

  const [notes, setNotes] = useState([]);
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("all");
const [editingNote, setEditingNote] = useState(null);

//*Add Note Function
const addNote =(newNote)=>{
  setNotes([...notes,newNote])
}

//*Delete Function
const deleteNote =(id)=>{
  setNotes(
    notes.filter(
      (note)=>note.id!==id
    )
  );
};

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm addNote={addNote}/>
      <SearchBar/>
      <Filter/>
      <NoteList notes={notes} 
      deleteNote={deleteNote}/>
    </div>
  )
}
export default App