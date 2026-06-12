import { useState } from "react";

const ProfileUploader = () => {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);

    const imageUrl =
      URL.createObjectURL(selectedFile);

    setPreview(imageUrl);
  };
  const removeFile = () => {
  setFile(null);
  setPreview("");
};

  return (
    <div>

      <h1>Profile Picture Upload</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      <br />
      <br />

      {preview && (
        <img
          src={preview}
          alt="preview"
          width="250"
        />
      )}

      {file && (
        <div>

          <p>Name: {file.name}</p>

          <p>Type: {file.type}</p>

          <p>
            Size:
            {(file.size / 1024).toFixed(2)}
            KB
          </p>

        </div>
      )}
      <button onClick={removeFile}>
  Remove Image
</button>

    </div>
  );
};

export default ProfileUploader;