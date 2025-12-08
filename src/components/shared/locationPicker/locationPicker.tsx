// 'use client'

// import { useState } from "react"
// import { MapContainer, TileLayer, Marker } from "react-leaflet"
// import L from "leaflet"

// const markerIcon = L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// })

// export default function LocationPicker({ defaultLat, defaultLng, onChange }) {
//   const [position, setPosition] = useState([defaultLat, defaultLng])

//   const handleDragEnd = (e) => {
//     const marker = e.target
//     const newPos = marker.getLatLng()
//     setPosition([newPos.lat, newPos.lng])
//     if (onChange) onChange(newPos.lat, newPos.lng)
//   }
  
//   return (
//     <MapContainer
//       key={`${defaultLat}-${defaultLng}`}
//       center={position}
//       zoom={7}
//       style={{ width: "100%", height: "100%" }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Marker
//         position={position}
//         icon={markerIcon}
//         draggable={true}
//         eventHandlers={{ dragend: handleDragEnd }}
//       />
//     </MapContainer>
//   )
// }
