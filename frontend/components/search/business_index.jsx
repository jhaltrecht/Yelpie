import React from 'react';
import BusinessIndexItem from './business_index_item';

const BusinessIndex = ({ businesses }) => (
  <div>
    <h1>Businesses: </h1>
    {businesses.map(business => (
      <BusinessIndexItem
        business={business}
        key={business.id}
      />
        // <h1>{business.name}</h1> 
    ))}
  </div>
);

export default BusinessIndex;
