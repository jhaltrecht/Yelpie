import BusinessIndex from "./business_index.jsx";
import { updateFilter } from '../../actions/filter_actions';

import {  fetchBusinesses} from "../../actions/business_actions";
import { connect } from 'react-redux';

import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
    businesses: asArray(state.entities.businesses),
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessIndex);


