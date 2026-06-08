import { useState } from "react";
import UserTable from "./components/UserTable";
import { users } from "./data/users";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  const currentUsers = users.slice(
    firstIndex,
    lastIndex
  );

  return (
    <>
      <h1>User Management</h1>

      <UserTable users={currentUsers} />
      <Pagination
  totalUsers={users.length}
  usersPerPage={usersPerPage}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
/>
    </>
  );
}

export default App;