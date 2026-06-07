import { useState } from "react";

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
  };

  const clearInput = () => {
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-8"
    >
      <div className="relative flex-1">

        {/* Search Icon */}
        <span
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        >
          🔍
        </span>

        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="
            w-full
            border
            border-gray-300
            rounded-lg
            pl-10
            pr-10
            py-2
            outline-none
            focus:ring-2
            focus:ring-black
          "
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={clearInput}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-gray-500
              hover:text-black
            "
          >
            ✖
          </button>
        )}

      </div>

      <button
        type="submit"
        disabled={loading}
        className="
          bg-black
          text-white
          px-6
          py-2
          rounded-lg
          flex
          items-center
          gap-2
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {loading && (
          <div
            className="
              w-4
              h-4
              border-2
              border-white
              border-t-transparent
              rounded-full
              animate-spin
            "
          />
        )}

        {loading
          ? "Searching..."
          : "Search"}
      </button>
      
    </form>
  );
};

export default SearchBar;