const Filter = ({ filterValue, setFilterValue }) => {
  return (
    <div>
      <label htmlFor="filter">Filter by Name:</label>
      <input
        type="text"
        id="filter"
        value={filterValue}
        onChange={e => setFilterValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Filter;
