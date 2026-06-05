import { useState } from "react";
import UserCard from "./components/UserCard";
import useFetch from "./hooks/useFetch";
function App() {
  const [search, setSearch] = useState("");

  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>User Directory App</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Total Users: {users.length}</h3>

      {filteredUsers.lenght === 0 ? (
        <h2>No user Found</h2>
      ) : (
        filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
}

export default App;
