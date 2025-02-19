import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
};

const InteractiveMaps = (props) => {
  return (
    <div className="interactive-maps">
      <h2>Interactive Maps</h2>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      >
        <Marker position={{ lat: -1.2884, lng: 36.8233 }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
})(InteractiveMaps);