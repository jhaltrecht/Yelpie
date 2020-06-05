import BusinessIndex from "./business_index.jsx";

import {  fetchBusinesses} from "../../actions/business_actions";
import { connect } from 'react-redux';

import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
    businesses: asArray(state.entities),
});

const mapDispatchToProps = dispatch => ({
        fetchBusinesses: id => dispatch(fetchBusinesses())

    // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessIndex);


