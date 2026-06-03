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

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm/>
      <SearchBar/>
      <Filter/>
      <NoteList/>
    </div>
  )
}
export default App