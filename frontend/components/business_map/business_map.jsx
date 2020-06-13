import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';


// import MarkerManager from '../../util/marker_manager';

// const getCoordsObj = latLng => ({
//     lat: latLng.lat(),
//     lng: latLng.lng()
// });



class BusinessMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: {
                lat: 34.052235,
                lng: -118.243683
            }, // LA Coordinates
            zoom: 13
        };
        this.map = new google.maps.Map(this.refs.map, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));


    }

    componentDidUpdate() {
        
    }

    registerListeners() {
       
    }

    handleMarkerClick() {
    }

    handleClick() {
       
    }

    render() {
        return (
            <div id="map-container" ref="map">
                Map
            </div>
        );
    }
}

export default withRouter(BusinessMap);
