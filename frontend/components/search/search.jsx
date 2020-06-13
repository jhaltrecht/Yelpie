import React from 'react';

// import FilterForm from './filter_form';
import BusinessIndex from './business_index';
import BusinessMap from './../business_map/business_map';

const Search = ({ businesses}) => (
    <div className="user-pane">
        <div className="left-half">
            <BusinessMap
                businesses={businesses}
                // updateFilter={updateFilter}
                // singleBusiness={false}
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
