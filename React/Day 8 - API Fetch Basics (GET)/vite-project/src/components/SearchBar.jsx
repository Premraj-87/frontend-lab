const SearchBar = ({search,setSearch}) => {
  return (
    <div>
        <input
            type="text"
            placeholder="Search by name, email, company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}
export default SearchBar
