import React, { useState, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { searchCountries } from '../services/countryData';

// Custom marker icon with modern design
const customIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM3LjU4IDIgNCAxLjU4IDQgMTJDNCAxNi40MiA3LjU4IDIwIDEyIDIwQzE2LjQyIDIwIDIwIDE2LjQyIDIwIDEyQzIwIDcuNTggMTYuNDIgNCAxMiA0WiIgZmlsbD0iIzRGNDZFNSIvPjxwYXRoIGQ9Ik0xMiAyMkMxNy41MjI4IDIyIDIyIDE3LjUyMjggMjIgMTJDMjIgNi40NzcxNSAxNy41MjI4IDIgMTIgMkM2LjQ3NzE1IDIgMiA2LjQ3NzE1IDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

// Map center component with smooth animations
function MapCenter({ coords, zoom }: { coords?: [number, number]; zoom?: number }) {
  const map = useMap();
  
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, zoom || 5, {
        duration: 2,
        easeLinearity: 0.25
      });
    }
  }, [coords, zoom, map]);

  return null;
}

interface InteractiveMapProps {
  onCountrySelect: (countryName: string) => void;
  selectedCountry: string | null;
}

export default function InteractiveMap({ onCountrySelect, selectedCountry }: InteractiveMapProps) {
  const [markers, setMarkers] = useState<Array<{
    position: [number, number];
    name: string;
    code: string;
  }>>([]);
  const [center, setCenter] = useState<[number, number]>([20, 0]);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    const countryList = searchCountries('');
    const validMarkers = countryList
      .filter(country => country.coordinates?.lat && country.coordinates?.lon)
      .map(country => ({
        position: [parseFloat(country.coordinates.lat), parseFloat(country.coordinates.lon)],
        name: country.name,
        code: country.code
      }));
    setMarkers(validMarkers);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const country = markers.find(m => m.name === selectedCountry);
      if (country) {
        setCenter(country.position);
        setZoom(5);
      }
    }
  }, [selectedCountry, markers]);

  const handleMarkerClick = useCallback((name: string) => {
    onCountrySelect(name);
  }, [onCountrySelect]);

  // Modern map style
  const mapStyle = {
    default: {
      color: '#e2e8f0',
      weight: 1,
      fillColor: '#f8fafc',
      fillOpacity: 0.7
    },
    water: {
      color: '#e2e8f0',
      weight: 1,
      fillColor: '#f1f5f9',
      fillOpacity: 0.7
    }
  };

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-full h-full"
        zoomControl={true}
        minZoom={2}
        maxBounds={[[-90, -180], [90, 180]]}
        style={{ background: '#f8fafc' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <MapCenter coords={selectedCountry ? center : undefined} zoom={zoom} />
        
        {markers.map((marker) => (
          <Marker
            key={marker.code}
            position={marker.position}
            icon={customIcon}
            eventHandlers={{
              click: () => handleMarkerClick(marker.name)
            }}
          >
            <Popup className="rounded-lg shadow-lg">
              <div className="text-center p-2">
                <h3 className="font-semibold text-lg mb-2">{marker.name}</h3>
                <button
                  onClick={() => handleMarkerClick(marker.name)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 z-[1000]">
        <div className="flex space-x-2">
          <button
            onClick={() => {
              setCenter([20, 0]);
              setZoom(2);
            }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Reset View"
          >
            🌍
          </button>
        </div>
      </div>
    </div>
  );
}