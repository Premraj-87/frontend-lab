import { useState } from "react";
import { searchMovies } from "../services/movieApi";
const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      setError(null);

      const data = await searchMovies(query);
     if (data.Response === "False") {
  setMovies([]);
  return;
}
setMovies(data.Search);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    movies,
    loading,
    error,
    fetchMovies,
  };
};
export default useMovies;
