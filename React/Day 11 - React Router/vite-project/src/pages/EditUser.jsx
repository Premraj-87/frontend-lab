import { useParams } from "react-router-dom";

const EditUser = () => {
    const{id}=useParams();
  return (
    <div>Editing User {id}</div>
  )
}
export default EditUser