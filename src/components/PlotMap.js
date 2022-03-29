import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default function PlotMap(props) {

const AnyReactComponent = ({ text }) => <div>{text}</div>;


 let defaultProps = {
  zoom: 20,
  center: {
    lat:  31.515894, lng: 74.340111
  },
  mapTypeId: "terrain"
};

  const handleApiLoaded = (map, maps) => {
    const triangleCoords = [
      { lat:  31.515894, lng: 74.340111 },
      { lat:  31.515936, lng: 74.340052},
      { lat:31.515994, lng: 74.340131 },
      { lat:  31.515945, lng:  74.340183}
    ];
  
     var bermudaTriangle = new maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    bermudaTriangle.setMap(map);
  };


  return (
    <div className='mapBox'>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    >
      {/* <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      /> */}
    </GoogleMapReact>
  </div>
  )
}
