import { useState } from "react";
import users from "../data/users";
const Dashboard = () => {
    const [searchTerm, setSearchTerm] =
    useState("");

  const [roleFilter, setRoleFilter] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("name");

  return (
    <div>Dashboard</div>
  )
}
export default Dashboard;