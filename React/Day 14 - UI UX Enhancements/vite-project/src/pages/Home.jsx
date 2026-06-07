/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import useMovies from "../hooks/useMovies";

import MovieGrid from "../components/movies/MovieGrid";
import SearchBar from "../components/movies/SearchBar";
import MovieGridSkeleton from "../components/movies/MovieGridSkeleton";

import ErrorState from "../components/ui/ErrorState";
import EmptyState from "../components/ui/EmptyState";
const [selectedMovie, setSelectedMovie] =
  useState(null);
const Home = () => {
  const {
    movies,
    loading,
    error,
    fetchMovies,
  } = useMovies();

  const [searchTerm, setSearchTerm] =
    useState("Hero");

  useEffect(() => {
    fetchMovies("Hero");
  }, []);

  const handleSearch = (query) => {
    setSearchTerm(query);
    fetchMovies(query);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold">
          Discover Movies
        </h2>

        <p className="text-gray-500">
          Search your favorite movies
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar
        onSearch={handleSearch}
        loading={loading}
      />

      {/* Results Info */}
      {!loading && !error && (
        <div className="flex items-center justify-between">
          <p className="text-gray-500">
            Results for "{searchTerm}"
          </p>

          <p className="text-gray-500">
            {movies.length} movies found
          </p>
        </div>
      )}

      {/* Loading State */}
      {loading && <MovieGridSkeleton />}

      {/* Error State */}
      {!loading && error && (
        <ErrorState
          title="❌ Failed To Load Movies"
          message="Something went wrong while fetching movies."
          onRetry={() =>
            fetchMovies(searchTerm)
          }
          loading={loading}
        />
      )}

      {/* Empty State */}
      {!loading &&
        !error &&
        movies.length === 0 && (
          <EmptyState
            title="🎬 No Movies Found"
            description="Try another search term."
          />
        )}

      {/* Success State */}
      {!loading &&
        !error &&
        movies.length > 0 && (
          <MovieGrid
  movies={movies}
  onSelectMovie={setSelectedMovie}
/>
        )}
    </div>
  );
};

export default Home;