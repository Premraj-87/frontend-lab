function Pagination({
  currentPage,
  totalPages,
  setCurrentPage
}) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        gap: "10px",
        alignItems: "center"
      }}
    >
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentPage(index + 1)
            }
          >
            {index + 1}
          </button>
        )
      )}

      <button
        onClick={handleNext}
        disabled={
          currentPage === totalPages
        }
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;