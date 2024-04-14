import PropTypes from 'prop-types';

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
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  setFilterValue: PropTypes.func.isRequired,
};

export default Filter;
