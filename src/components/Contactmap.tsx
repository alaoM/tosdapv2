"use client"
import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const ContactMap = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 36.028012,
    lng: -86.860668
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
        options={{
          scrollwheel: false,
          styles: [
            // Add your custom styles here
          ]
        }}
      >
        {/* <Marker
          position={defaultCenter}
          icon={{
            url: '/img/icon/marker.png', // Adjust this path accordingly
             scaledSize: new window.google.maps.Size(50, 50)
          }}
        /> */}
      </GoogleMap>
    </div>
  );
};

export default ContactMap;
