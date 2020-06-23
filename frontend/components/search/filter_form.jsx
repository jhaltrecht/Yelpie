import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

const clearChange = (filter, updateFilter) => e => (
    updateFilter(filter, "")

);


const FilterForm = ({ name ,updateFilter }) => (
    <div>
        <h2 className="filter">Filter Results</h2>
        <br />
        <label>Business Name: </label>
        <input 
        className="input-filter"
            type="text"
            value={name}
            onChange={handleChange('name', updateFilter)}
        /> 
        {/* <button onClick={
            clearChange('name', updateFilter)
            // ;
            // document.getElementById('input-filter').value = "" 
        }
        >Clear Result:</button> */}
        <br />
    </div>
);

export default FilterForm;
