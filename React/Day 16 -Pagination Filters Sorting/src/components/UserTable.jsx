function UserTable({ users }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Join Date</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.role}</td>
            <td>{user.joinDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;