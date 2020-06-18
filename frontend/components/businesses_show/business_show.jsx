import React from 'react';
import { Link } from 'react-router-dom';

import BusinessDetail from './business_detail';
import BusinessMap from '../business_map/business_map';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';
import { render } from 'react-dom';

const BusinessShow = ({ business, businessId,fetchBusiness,session, reviews }) => {
    const businesses = {
        [businessId]: business
    };

        let renderFunc;
            if (session.id > 0){
            renderFunc=(
                <div>
                    <h3>Leave a Review:</h3>
                    <ReviewFormContainer />
                </div>
            );
            }
            else {renderFunc=(
                <div>
                    <h3>Login to leave a review</h3>
                </div>
            )}
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
                {/* <ReviewLink className="review-link"
                    component={ReviewFormContainer}
                    to={`/businesses/${businessId}/review`}
                    label="Leave a Review"
                /> */}
                {renderFunc}
                
            </div>
        </div>
    );
            }


export default BusinessShow;
