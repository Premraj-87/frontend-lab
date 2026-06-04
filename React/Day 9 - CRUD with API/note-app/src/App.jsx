import { useState,useEffect } from "react";
import Filter from "./components/Filter";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import {
  getNotes,
  createNote,
  updateNoteApi,
  deleteNoteApi
}
//! ok
from "./services/notesApi";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingNote, setEditingNote] = useState(null);
const [loading, setLoading] =
  useState(true);
  const [error, setError] =
  useState("");
  //*Add Note Function
  const addNote =
  async (newNote) => {

    try {

      const savedNote =
        await createNote(
          newNote
        );

      setNotes([
        ...notes,
        savedNote
      ]);

    } catch {

      alert(
        "Failed to add note"
      );

    }

};

  //*Delete Function
  const deleteNote =
  async (id) => {

    try {

      await deleteNoteApi(id);

      setNotes(
        notes.filter(
          note =>
            note.id !== id
        )
      );

    } catch {

      alert(
        "Delete Failed"
      );

    }

};

  //* Update Function
  const updateNote =
  async (updatedNote) => {

    try {

      const savedNote =
        await updateNoteApi(
          updatedNote
        );

      setNotes(

        notes.map((note) =>

          note.id === savedNote.id

            ? savedNote

            : note

        )

      );

    } catch {

      alert(
        "Update Failed"
      );

    }

};
  //*
 const filteredNotes =
  notes.filter((note) => {

    const matchesSearch =
      note.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );

    const matchesFilter =
      filter === "all"
        ? true
        : note.category === filter;

    return (
      matchesSearch &&
      matchesFilter
    );

});

useEffect(() => {

  const fetchNotes =
    async () => {

      try {

        setLoading(true);

        const data =
          await getNotes();

        setNotes(data);

      } catch (error) {

        setError(
          "Failed to fetch notes"
        );

      } finally {

        setLoading(false);

      }

    };

  fetchNotes();

}, []);

if (loading) {
  return <h2>Loading...</h2>;
}
if (error) {
  return <h2>{error}</h2>;
}

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm
        addNote={addNote}
        editingNote={editingNote}
        updateNote={updateNote}
        setEditingNote={setEditingNote}
      />

      <SearchBar search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        setEditingNote={setEditingNote}
      />
    </div>
  );
};
export default App;
