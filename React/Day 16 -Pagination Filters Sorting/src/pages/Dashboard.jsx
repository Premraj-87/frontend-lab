import { useState } from "react";

import {users} from "../data/users";

import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import SortControls from "../components/SortControls";
import UserTable from "../components/UserTable";

function Dashboard() {

  const [searchTerm, setSearchTerm] =
    useState("");

  const [roleFilter, setRoleFilter] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("name");

    const [usersPerPage, setUsersPerPage] =
  useState(5);
  // SEARCH

  const searchedUsers =
    users.filter((user) =>
      user.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

  // FILTER

  const filteredUsers =
    searchedUsers.filter((user) => {

      if (roleFilter === "All") {
        return true;
      }

      return user.role === roleFilter;
    });

  // SORT

  const sortedUsers =
    [...filteredUsers].sort((a, b) => {

      if (sortBy === "name") {
        return a.name.localeCompare(
          b.name
        );
      }

      return (
        new Date(b.joinDate) -
        new Date(a.joinDate)
      );
    });

  return (
    <div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <FilterDropdown
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
      />

      <SortControls
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <UserTable
        users={sortedUsers}
      />

    </div>
  );
}

export default Dashboard;