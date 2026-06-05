import {useState} from "react";
import {useNotes} from "../context/NotesContext";

 
function NoteForm(){
    const [text,setText]=useState("");

    const {addNote}=useNotes();
   const handleSubmit =(e)=>{
    e.preventDefault();
    if(!text.trim()){
        return;
    }
    addNote(text);
    console.log(text)
    setText("");
   }
   return(
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Enter note"
        value={text}
        onChange={(e)=>setText(e.target.value)}/>
        <button>
            Add Note
        </button>
    </form>
   )

}
export default NoteForm;