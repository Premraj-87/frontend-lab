 const FilterButtons = ({onFilterChange}) => {
    const filters=["all","complete","pending"];

  return (
    <div>
   {filters.map((item) => (
        <button
          key={item}
          onClick={() =>
            onFilterChange(item)
          }
        >
          {item}
        </button>
      ))}
    </div>
  )
}
export default FilterButtons