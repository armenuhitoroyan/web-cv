import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../style/ContactPage.module.css";

const Map: React.FC = () => {
  const position: [number, number] = [40.1792, 44.4991]; // Yerevan coordinates

  return (
    <div
      className={`w-full flex-col flex justify-center md:flex-column  ${styles.map}`}
    >
      <MapContainer
        className={styles.map_container}
        center={position as [number, number]} // Explicitly set type
        zoom={13}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Բարև, Երևան։</Popup>n
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
