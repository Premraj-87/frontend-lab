import { useState } from "react";
import { useEffect } from "react";
const SearchApp = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
        <p>Debounced Search: {debouncedSearch}</p>

    </div>
  );
};
export default SearchApp;
