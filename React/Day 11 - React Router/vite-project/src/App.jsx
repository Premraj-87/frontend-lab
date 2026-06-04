import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <>
      <div className="w-xl-7 mx-auto p-2">
        <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
