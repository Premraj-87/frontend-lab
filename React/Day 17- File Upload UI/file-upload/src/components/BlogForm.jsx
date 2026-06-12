import { useState } from "react";

function BlogForm() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      setImage(file);

      const imageUrl = URL.createObjectURL(file);

      setPreview(imageUrl);

    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);

    formData.append("content", content);

    formData.append("image", image);

    console.log("Sending Data...");
    
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };

  return (
    <div>

      <h2>Create Blog</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <br />
        <br />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <br />
        <br />

        {preview && (
          <img
            src={preview}
            alt="preview"
            width="300"
          />
        )}

        <br />
        <br />

        <button type="submit">
          Create Blog
        </button>

      </form>

    </div>
  );
}

export default BlogForm;