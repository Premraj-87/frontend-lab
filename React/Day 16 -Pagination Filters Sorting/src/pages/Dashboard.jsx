/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";

import { users } from "../data/users";

import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import SortControls from "../components/SortControls";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const [roleFilter, setRoleFilter] = useState("All");

  const [sortBy, setSortBy] = useState("name");

  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  // SEARCH

  const searchedUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // FILTER

  const filteredUsers = searchedUsers.filter((user) => {
    if (roleFilter === "All") {
      return true;
    }

    return user.role === roleFilter;
  });

  // SORT

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    return new Date(b.joinDate) - new Date(a.joinDate);
  });

  // PAGINATION

  const start = (currentPage - 1) * usersPerPage;

  const end = currentPage * usersPerPage;

  const currentUsers = sortedUsers.slice(start, end);

  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, roleFilter, sortBy]);

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "20px auto",
      }}
    >
      <h1>User Management Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <FilterDropdown roleFilter={roleFilter} setRoleFilter={setRoleFilter} />

        <SortControls sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <UserTable users={currentUsers} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Dashboard;
