import React from 'react';

// import FilterForm from './filter_form';
import BusinessIndex from './business_index';
import BusinessMap from './../business_map/business_map';

const Search = ({ businesses}) => (
    <div className="user-pane">
        <div className="left-half">
            <h5>Click Map to Add business!</h5>
            <BusinessMap
                businesses={businesses}
                // updateFilter={updateFilter}
                // singlebusiness={false}
            />
        </div>
        <div className="right-half">
            {/* <FilterForm
                updateFilter={updateFilter}
            /> */}
        </div>
 </div>
);

export default Search;
