const SearchBar = ({search,onSearchChange}) => {
  return (
   <input
   type="text"
   value={search}   
    onChange={(e) => onSearchChange(e.target.value)}
    placeholder="Search todos..."
    />
  )
}
export default SearchBar