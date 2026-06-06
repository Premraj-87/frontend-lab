/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useMovies from "../hooks/useMovies";

const Home = () => {
  const {
    movies,
    loading,
    error,
    fetchMovies,
  } = useMovies();

  useEffect(() => {
    fetchMovies("batman");
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Trending Movies
      </h2>

      {loading && (
        <p>Loading...</p>
      )}

      {error && (
        <p>{error}</p>
      )}

      <div>
        {movies.map((movie) => (
          <p key={movie.imdbID}>
            {movie.Title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;