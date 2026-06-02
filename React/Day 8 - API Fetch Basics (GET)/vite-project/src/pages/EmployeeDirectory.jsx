import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";

const EmployeeDirectory = () => {
    const [search, setSearch] = useState("");
    const { users, loading, error } = useUsers();
    const searchTerm = search.trim().toLowerCase();
    const filteredUsers = users.filter((user) => {
        if (!searchTerm) {
            return true;
        }

        const searchableText = [
            user.name,
            user.username,
            user.email,
            user.phone,
            user.website,
            user.company?.name,
            user.address?.city,
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return searchableText.includes(searchTerm);
    });
    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <ErrorMessage message={error} />;
    }
    
  return (
    <div>
        <h1>Employee Directory</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <UserTable users={filteredUsers} />


    </div>
  )
}
export default EmployeeDirectory
