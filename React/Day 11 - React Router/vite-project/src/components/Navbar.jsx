import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="m-xl-7 p-2 mx-auto flex gap-2" >

      <Link to="/" className="bg-indigo-500 px-2 rounded active:bg-indigo-600 transition">Home</Link>

      <Link to="/users"className="bg-indigo-500 px-2 rounded active:bg-indigo-600 transition">Users</Link>

      <Link to="/add-user"className="bg-indigo-500 px-2 rounded active:bg-indigo-600 transition">Add User</Link>
      <Link to="/edit-user/:id"className="bg-indigo-500 px-2 rounded active:bg-indigo-600 transition">Edit User</Link>
      

    </nav>
  );
}

export default Navbar;