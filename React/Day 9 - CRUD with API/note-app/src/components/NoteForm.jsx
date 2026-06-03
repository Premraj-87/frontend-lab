/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

function NoteForm({ addNote, editingNote,updateNote ,setEditingNote}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Study");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editingNote){
      updateNote({
        id:editingNote.id,
        title,
        content,
        category
      });
    }
    else{
      addNote({
        id:Date.now(),
        title,
        content,
        category
      })
    }
    setTitle("");
    setContent("");
    setCategory("Study");
    setEditingNote(null);
  };


  //useEffect
  useEffect(() => {
  if (editingNote) {
    // safe synchronous update
    setTitle(editingNote.title);
    setContent(editingNote.content);
    setCategory(editingNote.category);
  }
}, [editingNote]);


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Study">Study</option>

        <option value="Work">Work</option>

        <option value="Personal">Personal</option>
      </select>

      <button type="submit">
  {editingNote
    ? "Update Note"
    : "Add Note"}
</button>
    </form>
  );
}

export default NoteForm;
