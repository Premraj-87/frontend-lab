/* eslint-disable no-unused-vars */
function Pagination({
  totalUsers,
  usersPerPage,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(
    totalUsers / usersPerPage
  );

  return (
    <div>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() =>
            setCurrentPage(index + 1)
          }
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;