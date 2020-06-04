import * as APIUtil from '../util/review_util';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = ({ review, average_rating, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
    author,
});

export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);