const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const BASE_URL = "https://www.omdbapi.com";

//!Search Movie Function
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${query}`);

  const data = await response.json();
  return data;
};

//! Movie Details
export const getMovieById = async(id)=>{
    const response = await fetch(
        `${BASE_URL}/?apikey=${API_KEY}&i=${id}`
    );
    const data = await response.json();
    return data;
}
