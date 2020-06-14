import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';



const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});



class BusinessMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: {
                lat: 34.052235,
                lng: -118.243683
            }, // LA Coordinates
            zoom: 10
        };
        this.map = new google.maps.Map(this.refs.map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.registerListeners();


    }

    componentDidUpdate() {
        if (this.props.singleBusiness) {
            const targetBusinessKey = Object.keys(this.props.businesses)[0];
            const targetBusiness = this.props.businesses[targetBusinessKey];
            this.MarkerManager.updateMarkers([targetBusiness]); //grabs only that one business
        } else {
            this.MarkerManager.updateMarkers(this.props.businesses);
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
    }

    handleMarkerClick() {
        this.props.history.push(`business/${business.id}`);
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
