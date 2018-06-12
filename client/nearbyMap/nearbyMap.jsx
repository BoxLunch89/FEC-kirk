/* eslint-disable react/prop-types, no-unused-vars, no-undef */
import React from 'react';
import loadJS from './loadJS';
import style from './nearbyMap.css';

const { NEARBY_GOOGLE_MAPS_API_KEY } = process.env;

class NearbyMap extends React.Component {
  componentDidMount() {
    // Google Maps' script will be loaded onto the DOM as a script tag and will run this function,
    //   so it's needed on the global scope
    window.initializeMap = this.initializeMap.bind(this);
    if (NEARBY_GOOGLE_MAPS_API_KEY) {
      loadJS(
        `https://maps.googleapis.com/maps/api/js?key=${NEARBY_GOOGLE_MAPS_API_KEY}&callback=initializeMap`
      );
    } else {
      console.error('No Google Maps API key provided.');
    }
  }

  initializeMap() {
    const attraction = {
      lat: this.props.attraction.latitude,
      lng: this.props.attraction.longitude
    };
    const map = new google.maps.Map(window.document.getElementById('map'), {
      zoom: 14,
      center: attraction
    });
    const marker = new google.maps.Marker({
      position: attraction,
      map
    });
  }

  render() {
    return (
      <div className={style.nearbyMap}>
        <div id="map" className={style.map} />
      </div>
    );
  }
}

export default NearbyMap;
