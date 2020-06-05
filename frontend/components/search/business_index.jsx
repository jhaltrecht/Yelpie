import React from 'react';
import BenchIndexItem from './business_index_item';

const BusinessIndex = ({ businesses }) => (
  <div>
    <h1>Businesses: </h1>
    {businesses.map(business => (
      <businessIndexItem
        business={business}
        key={business.id}
      />
    ))}
  </div>
);

export default businessIndex;
