export default async function FileComponent({ params }) {
  const { filePath } = await params;
  return (
    <div>
      <h1>Dynamic File Path is this one</h1>
      <p>File Path: {filePath.join('/')}</p>
    </div>
  );
}