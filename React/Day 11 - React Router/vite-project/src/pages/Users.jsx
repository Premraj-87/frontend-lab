import { Link } from "react-router-dom";
const Users = () => {
    const users=[
        {id:1,name:"Prem"},
        {id:2,name:"Optimus"},
        {id:3,name:"Bumblebee"}
    ]
  return (
    <div>
        {users.map(user=>(
            <div key={user.id}>
                <h3>{user.name}</h3>
                <Link to={`edit-user/${user.id}`}>
                Edit
                </Link>
            </div>
        ))}
    </div>
  )
}
export default Users