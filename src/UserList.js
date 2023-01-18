const UserList = ({ users }) => {
  const renderedUsers = users.map((user, index) => {
    return (
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
};

export default UserList;
