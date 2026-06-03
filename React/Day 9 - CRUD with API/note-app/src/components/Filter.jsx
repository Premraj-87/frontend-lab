const Filter = ({filter,setFilter}) => {

  return (
    <div>
      <select
      value={filter}
      onChange={(e)=>
        setFilter(
          e.target.value
        )
      }
      >
      <option value="all">
        ALL
      </option>
      <option value="Study">
        Study
      </option>

      <option value="Work">
        Work
      </option>

      <option value="Personal">
        Personal
      </option>
    </select>
    </div>
  )
}
export default Filter