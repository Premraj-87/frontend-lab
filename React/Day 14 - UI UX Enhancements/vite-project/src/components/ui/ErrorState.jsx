const ErrorState = ({
  title,
  message,
  onRetry,
}) => {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      py-20
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        text-red-500
        "
      >
        {title}
      </h2>

      <p
        className="
        text-gray-500
        mt-2
        "
      >
        {message}
      </p>

      <button
        onClick={onRetry}
        className="
        mt-4
        bg-black
        text-white
        px-6
        py-2
        rounded-lg
        hover:bg-gray-800
        transition
        "
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorState;