'use client'

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function SimpleMap({ lat, lng }) { // import in page
  return (
    <MapContainer
      key={`${lat}-${lng}`}        
      center={[lat, lng]}
      zoom={15}                   
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]} icon={markerIcon} />
    </MapContainer>
  );
}
