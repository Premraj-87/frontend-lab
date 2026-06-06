const MovieCard = ({ movie }) => {
  return (
    <div
      className="
bg-white
rounded-xl
overflow-hidden
shadow-md
hover:shadow-xl
hover:-translate-y-2
transition-all
duration-300
"
    >
      <img
        src={movie.Poster !=="N/A" ? movie.Poster : "https://placehold.co/400x600?text=No+Image"}
        alt={movie.Title}
        className="
        w-full
        h-80
        object-cover
        "
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">
          {movie.Title}
        </h3>

        <p className="text-gray-500">
          {movie.Year}
        </p>

        <button
          className="
          mt-4
          w-full
          bg-black
          text-white
          py-2
          rounded-lg
          "
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;