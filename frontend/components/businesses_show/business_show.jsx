import React from 'react';
import { Link } from 'react-router-dom';

import BusinessDetail from './business_detail';
import BusinessMap from '../business_map/business_map';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';

const BusinessShow = ({ business, businessId,fetchBusiness, reviews }) => {
    const businesses = {
        [businessId]: business
    };

    return (
        <div className="single-business-show">
            <div className="single-business-map">
                <Link to="/" className="business-index-link" >Back to Businesses Index</Link>
                <BusinessMap 
                    businesses={businesses}
                    businessId={businessId}
                    singleBusiness={true}
                    fetchBusiness={fetchBusiness}
                />
            </div>
            
            <div className="right-half-business-details">
                <br/>
                <BusinessDetail business={business} reviews={reviews} />
                <br/>
                <ReviewLink className="review-link"
                    component={ReviewFormContainer}
                    to={`/businesses/${businessId}/review`}
                    label="Leave a Review"
                />
                <ProtectedRoute
                    path="/businesses/:businessId/review"
                    component={ReviewFormContainer}
                />
            </div>
        </div>
    );
};

export default BusinessShow;
