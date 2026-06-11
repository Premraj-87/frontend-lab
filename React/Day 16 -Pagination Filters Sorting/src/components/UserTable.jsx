
function UserTable({ users }) {

  return (
    <table border="1">

      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Join Date</th>
        </tr>
      </thead>

      <tbody>

        {users.map((user) => (

          <tr key={user.id}>

            <td>{user.name}</td>

            <td>{user.email}</td>

            <td>{user.role}</td>

            <td>{user.joinDate}</td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default UserTable;