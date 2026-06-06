import { useEffect } from "react";
import useMovies from "../hooks/useMovies";
import MovieGrid from "../components/movies/MovieGrid";
import SearchBar from "../components/movies/SearchBar";
const Home = () => {
  const {
    movies,
    loading,
    error,
    fetchMovies,
  } = useMovies();

  useEffect(() => {
    fetchMovies("Hero");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <p className="animate-pulse">
        Loading Movies...
      </p>
    );
  }

  if (error) {
    return (
      <p>
        Error Loading Movies
      </p>
    );
  }

  return (
    <div>
      <h2
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        Trending  <p className="text-gray-500">
  {movies.length} movies found
</p>

      </h2>
     
      <SearchBar onSearch={fetchMovies}/>
      <MovieGrid movies={movies} />
    </div>
  );
};

export default Home;