const MovieCardSkeleton = () => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        overflow-hidden
        shadow-md
      "
    >
      {/* Poster */}
      <div
        className="
          h-80
          bg-gray-300
          animate-pulse
        "
      />

      {/* Content */}
      <div className="p-4 space-y-3">

        <div
          className="
            h-6
            bg-gray-300
            rounded
            animate-pulse
          "
        />

        <div
          className="
            h-4
            w-20
            bg-gray-300
            rounded
            animate-pulse
          "
        />

        <div
          className="
            h-10
            bg-gray-300
            rounded-lg
            animate-pulse
          "
        />

      </div>
    </div>
  );
};

export default MovieCardSkeleton;