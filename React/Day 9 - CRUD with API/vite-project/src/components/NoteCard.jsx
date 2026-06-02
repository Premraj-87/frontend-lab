const NoteCard = ({note,onDelete,onEdit}) => {
  
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button
      onClick={()=>
        onDelete(note.id)
      }>
        Delete
      </button>
      <button
      onClick={()=>
        onEdit(note)
      }>Edit</button>
    </div>
  )
}
export default NoteCard