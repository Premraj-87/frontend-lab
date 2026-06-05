function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>

      <button
  onClick={() =>
    window.open(
      `https://${user.website}`,
      "_blank"
    )
  }
>
  Visit Website
</button>
    </div>
  );
}

export default UserCard;