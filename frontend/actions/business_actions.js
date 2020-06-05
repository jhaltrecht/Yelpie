import * as APIUtil from '../util/business_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

export const receiveBusinesses = businesses => ({
    type: RECEIVE_BUSINESSES,
    businesses,
});

export const receiveBusiness = ({ business, reviews, authors }) => ({
    type: RECEIVE_BUSINESS,
    business,
    reviews,
    authors,
});



export const fetchBusinesses = filters => dispatch => (
    APIUtil.fetchBusinesses(filters).then(businesses => (
        dispatch(receiveBusinesses(businesses))
    ))
);

export const fetchBusiness = id => dispatch => (
    APIUtil.fetchBusiness(id).then(payload => (
        dispatch(receiveBusiness(payload))
    ))
);

