import { useState } from "react";
import {users} from "../data/users";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";

const Dashboard = () => {
  //!Serach logic
  const [searchTerm, setSearchTerm] = useState("");
  const searchedUsers = users.filter((user)=>{
    return user.name
       .toLowerCase()
       .includes(
        searchTerm.toLowerCase()
       );
  })

  const [roleFilter, setRoleFilter] = useState("All");

  const [sortBy, setSortBy] = useState("name");

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserTable
 users={searchedUsers}
/>
    </div>
  );
};
export default Dashboard;
