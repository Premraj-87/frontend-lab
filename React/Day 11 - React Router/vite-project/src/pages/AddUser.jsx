import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate =useNavigate();
    const handleSubmit =()=>{
        alert("User added");
        navigate("/users");
    }
  return (
    <div>
        <button onClick={handleSubmit}>
            Save User
        </button>

    </div>
  )
}
export default AddUser