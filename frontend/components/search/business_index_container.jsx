import BusinessIndex from "./business_index.jsx";

import { connect } from 'react-redux';

import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
    businesses: asArray(state.entities),

});

const mapDispatchToProps = dispatch => ({
    // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessIndex);


