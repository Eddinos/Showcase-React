import React from 'react';
import { Component } from 'react';

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

export default class Map extends Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: EIFFEL_TOWER_POSITION,
      zoom: 16
    });
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: 300,
      border: '1px solid black'
    };

    return (
      <div ref="map" style={mapStyle}>I should be a map!</div>
    );
  }

}
