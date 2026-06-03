import { useState, useEffect } from "react";

const NoteForm = ({ onAddNote, editingNote, onUpdateNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      return;
    }

    if (editingNote) {
      onUpdateNote({
        id: editingNote.id,
        title: trimmedTitle,
        content: trimmedContent,
      });
    } else {
      onAddNote({
        id: Date.now(),
        title: trimmedTitle,
        content: trimmedContent,
      });
    }

    setTitle("");
    setContent("");
  };
  useEffect(() => {
    if (editingNote) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(editingNote.title);

      setContent(editingNote.content);
    }
  }, [editingNote]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <textarea
        placeholder="Enter Contents"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <br />

      {/* Button  */}
      <button type="submit">{editingNote ? "Update Note" : "Add Note"} </button>
    </form>
  );
};
export default NoteForm;
