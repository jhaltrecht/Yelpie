import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

const clearChange = (filter, updateFilter) => e => (
    updateFilter(filter, "")
);

const inputClear=()=>(
    document.getElementById('input-filter').value = ""
)

const FilterForm = ({ name ,updateFilter }) => (
    <div>
        <h2 className="filter">Filter Results</h2>
        <br />
        <label>Business Name: </label>
        <input 
        id="input-filter"
            type="text"
            value={name}
            onChange={handleChange('name', updateFilter)}
        /> 
         <button 
         className="filter-button"
         onClick={()=>{
            clearChange('name', updateFilter)();
            inputClear();
        }}
        >Clear Result:</button> 
        <br />
    </div>
);

export default FilterForm;
