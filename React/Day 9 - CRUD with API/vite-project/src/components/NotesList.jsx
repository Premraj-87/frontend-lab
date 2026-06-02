import NoteCard from "./NoteCard";
const NotesList = ({notes,onDelete,onEdit}) => {
  if(notes.length===0){
        return(
            <h2>No Notes Found</h2>
        )
    }
  return (
    <div>
      {notes.map((note)=>(
        <NoteCard
        key={note.id}
        note={note}
        onDelete={onDelete}
        onEdit={onEdit}
        />
      ))}
    </div>
  )
}
export default NotesList;