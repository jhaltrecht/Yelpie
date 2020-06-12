import React from 'react';
import BusinessIndexItem from './business_index_item';
import Search from "./search"

const BusinessIndex = ({ businesses, fetchBusinesses }) => {
console.log(businesses)
  if (businesses.length===0){
    fetchBusinesses()
  }
    return(
  <div className="business-index-container-div">
    <div className="business-index-container">
    <h1>Businesses: </h1>
    <h3>Click on the business to leave a review</h3>
    {businesses.map(business => (
      <BusinessIndexItem
        business={business}
        key={business.id}
      />
    ))}
        </div>
        <div className="search-index">
          <Search businesses={businesses}  />
        </div>
  </div>
    )

    };

export default BusinessIndex;
