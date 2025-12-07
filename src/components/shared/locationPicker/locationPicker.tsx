'use client'

import { useState } from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export default function LocationPicker({ defaultLat, defaultLng, onChange }) {
  const [position, setPosition] = useState([defaultLat, defaultLng])

  const handleDragEnd = (e) => {
    const newPos = e.target.getLatLng()
    setPosition([newPos.lat, newPos.lng])
    onChange(newPos.lat, newPos.lng)   // مختصات جدید بیرون
  }

  return (
    <div className="h-[303px] border border-gray-200 rounded w-full overflow-hidden">
      <MapContainer
        key={`${defaultLat}-${defaultLng}`}  
        center={position}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          draggable={true}
          position={position}
          icon={markerIcon}
          eventHandlers={{ dragend: handleDragEnd }}
        />
      </MapContainer>
    </div>
  )
}
