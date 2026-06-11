function SearchBar({
  searchTerm,
  setSearchTerm
}) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
      style={{
        padding: "10px",
        width: "250px"
      }}
    />
  );
}

export default SearchBar;