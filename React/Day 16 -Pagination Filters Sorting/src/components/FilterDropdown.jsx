function FilterDropdown({
  roleFilter,
  setRoleFilter
}) {
  return (
    <select
      value={roleFilter}
      onChange={(e) =>
        setRoleFilter(e.target.value)
      }
    >
      <option value="All">All</option>
      <option value="Admin">Admin</option>
      <option value="User">User</option>
      <option value="Moderator">
        Moderator
      </option>
    </select>
  );
}

export default FilterDropdown;