import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      
        <div className="w-xl-7 mx-auto p-2">
 <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/users" element={<Users />} />

        <Route path="/add-user" element={<AddUser />} />

        <Route path="/edit-user/:id" element={<EditUser />} />

      </Routes>
        </div>
     
    </>
  );
}

export default App;