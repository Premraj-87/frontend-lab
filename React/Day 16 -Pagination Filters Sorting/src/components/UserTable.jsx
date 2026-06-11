function UserTable({ users }) {

  if(users.length === 0) {

    return (
      <h3>
        No Users Found
      </h3>
    );

  }

  return (

    <table
      border="1"
      cellPadding="10"
      width="100%"
    >

      <thead>

        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Join Date</th>
        </tr>

      </thead>

      <tbody>

        {
          users.map((user) => (

            <tr key={user.id}>

              <td>{user.name}</td>

              <td>{user.role}</td>

              <td>{user.joinDate}</td>

            </tr>

          ))
        }

      </tbody>

    </table>

  );
}

export default UserTable;