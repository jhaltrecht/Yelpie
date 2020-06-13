import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ name ,updateFilter }) => (
    <div>
        <h2 className="filter">Filter Results</h2>
        <br />
        <label>Business Name: </label>
        <input
            type="text"
            value={name}
            onChange={handleChange('name', updateFilter)}
        />
        <br />
    </div>
);

export default FilterForm;
