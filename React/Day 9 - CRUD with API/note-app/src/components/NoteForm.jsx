import { useState } from "react";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] =
    useState("Study");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title,
      content,
      category,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="Study">
          Study
        </option>

        <option value="Work">
          Work
        </option>

        <option value="Personal">
          Personal
        </option>
      </select>

      <button type="submit">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;