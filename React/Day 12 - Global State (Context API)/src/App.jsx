import NoteForm from "./components/NoteForm"
import NoteList from "./components/NoteList";
const App = () => {
  return (
    <div>
      <h2>Notes App</h2>
      <NoteForm/>
      <NoteList/>
    </div>
  )
}
export default App