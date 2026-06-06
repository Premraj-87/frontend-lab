import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          flex-1
          border
          border-gray-300
          rounded-lg
          px-4
          py-2
          outline-none
          focus:ring-2
          focus:ring-black
        "
      />

      <button
        type="submit"
        className="
          bg-black
          text-white
          px-6
          py-2
          rounded-lg
          hover:bg-gray-800
        "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
