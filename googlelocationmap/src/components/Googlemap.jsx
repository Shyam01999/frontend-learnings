import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const userLocationIcon = new L.Icon({
//     iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
//     iconSize: [38, 38],
//     iconAnchor: [22, 38],
//     popupAnchor: [1, -34],
//   });

function Googlemap({ load }) {
    console.log("load", load)
  const [currentPosition, setCurrentPosition] = useState(null);
  const GOOGLE_MAPS_API_KEY = "AIzaSyB3Mbhn-OA-Xd_CIQ0MtgzqgpX5Q3-RF54";
  console.log("currentPosition", currentPosition);

  useEffect(() => {
    // Fetch the user's current location
    if(currentPosition){
        setCurrentPosition({})
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error fetching location: ", error);
      }
    );
  }, [load]);

  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
  };

  const mapOptions = {
    zoom: 16,
    center: currentPosition,
  };

  return (
    //google map
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      {currentPosition ? (
        <GoogleMap mapContainerStyle={mapContainerStyle} {...mapOptions}>
          <Marker position={currentPosition} />
        </GoogleMap>
      ) : (
        <p>Loading map...</p>
      )}
    </LoadScript>

    // leaftlet map
    // <div>
    //   {currentPosition ? (
    //     <MapContainer
    //       center={currentPosition}
    //       zoom={15}
    //       style={{ width: '100%', height: '100vh' }}
    //     >
    //       <TileLayer
    //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //         attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    //       />
    //       <Marker position={currentPosition} icon={userLocationIcon}>
    //         <Popup>Your Current Location</Popup>
    //       </Marker>
    //     </MapContainer>
    //   ) : (
    //     <p>Loading map...</p>
    //   )}
    // </div>
  );
}

export default Googlemap;
