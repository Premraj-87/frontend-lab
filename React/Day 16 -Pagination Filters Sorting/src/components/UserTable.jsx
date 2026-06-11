import { useState } from "react";
import { users } from "../data/users";

const UserTable = () => {
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  // Filtering logic
  const filteredUsers = users.filter((user) => {
    if (roleFilter === "All") return true;
    return user.role === roleFilter;
  });

  // Sorting logic
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  return (
    <>
      {/* Dropdown for role filter */}
      <select
        value={roleFilter}
        onChange={(e) => setRoleFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Manager">Manager</option>
      </select>

      {/* Dropdown for sort order */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="asc">Sort Ascending (A → Z)</option>
        <option value="desc">Sort Descending (Z → A)</option>
      </select>

      {/* Table */}
      <table border="1" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
