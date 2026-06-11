function SortControls({
  sortBy,
  setSortBy
}) {
  return (
    <select
      value={sortBy}
      onChange={(e) =>
        setSortBy(e.target.value)
      }
    >
      <option value="name">
        Sort By Name
      </option>

      <option value="date">
        Sort By Date
      </option>
    </select>
  );
}

export default SortControls;