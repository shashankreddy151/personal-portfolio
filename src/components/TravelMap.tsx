import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
);
const CustomMarkerClusterGroup = dynamic(
  () => import('./MarkerClusterGroup'),
  { ssr: false }
);

export type Place = {
  name: string;
  coords: [number, number];
  visited: boolean; // Add visited property to track places you've been
};

// Replace Kansas City locations with your personal travel destinations
const places: Place[] = [
  // Places you've visited - these will have special styling
  { name: 'Tokyo, Japan', coords: [35.6895, 139.6917], visited: true },
  { name: 'Kyoto, Japan', coords: [35.0116, 135.7681], visited: true },
  { name: 'Osaka, Japan', coords: [34.6937, 135.5023], visited: true },
  { name: 'Rome, Italy', coords: [41.9028, 12.4964], visited: true },
  { name: 'Florence, Italy', coords: [43.7696, 11.2558], visited: true },
  { name: 'Venice, Italy', coords: [45.4408, 12.3155], visited: true },
  { name: 'Vancouver, Canada', coords: [49.2827, -123.1207], visited: true },
  { name: 'Toronto, Canada', coords: [43.6532, -79.3832], visited: true },
  { name: 'New York City, USA', coords: [40.7128, -74.006], visited: true },
  { name: 'San Francisco, USA', coords: [37.7749, -122.4194], visited: true },
  { name: 'Seattle, USA', coords: [47.6062, -122.3321], visited: true },
  { name: 'Delhi, India', coords: [28.6139, 77.209], visited: true },
  { name: 'Mumbai, India', coords: [19.076, 72.8777], visited: true },
  { name: 'Goa, India', coords: [15.2993, 74.124], visited: true },
  
  // Optional: Places you want to visit in the future (different styling)
  { name: 'Sydney, Australia', coords: [-33.8688, 151.2093], visited: false },
  { name: 'Rio de Janeiro, Brazil', coords: [-22.9068, -43.1729], visited: false },
  { name: 'Cape Town, South Africa', coords: [-33.9249, 18.4241], visited: false },
  { name: 'Barcelona, Spain', coords: [41.3851, 2.1734], visited: false },
  { name: 'Dubai, UAE', coords: [25.2048, 55.2708], visited: false },
];

// World map center
const mapCenter: [number, number] = [20, 0];

const TravelMap: React.FC = () => {
  const [L, setL] = useState<typeof import('leaflet') | null>(null);

  useEffect(() => {
    let isMounted = true;
    // Dynamically import leaflet and fix icon only on client
    import('leaflet').then((leaflet) => {
      if (!isMounted) return;
      
      // Fix the default icon URLs
      // @ts-ignore
      delete leaflet.Icon.Default.prototype._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      });
      
      setL(leaflet);
    });
    return () => { isMounted = false; };
  }, []);

  if (!L) return <div className="w-full h-[500px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">Loading map...</div>;

  // Create the custom location pin icon for visited places - exactly like the image in the screenshot
  const visitedMarkerIcon = L.divIcon({
    className: 'custom-pin-icon',
    html: `<div class="pin-visited">
             <img src="/images/leaflet/location-marker.svg" alt="Location Pin" />
           </div>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42], // bottom center of the pin
    popupAnchor: [0, -42] // slightly above the pin
  });
  
  // Create a grayscale version of the pin for places to visit
  const toVisitMarkerIcon = L.divIcon({
    className: 'custom-pin-icon',
    html: `<div class="pin-to-visit">
             <img src="/images/leaflet/location-marker.svg" alt="Location Pin" />
           </div>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -42]
  });

  return (
    <motion.div
      className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <MapContainer
        center={mapCenter}
        zoom={2} // Zoomed out to show the world
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        preferCanvas={true}
        zoomControl={true}
      >
        {/* Use a grayscale map base layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <CustomMarkerClusterGroup>
          {places.map((place) => (
            <Marker 
              key={place.name} 
              position={place.coords} 
              icon={visitedMarkerIcon} // All markers use the same icon style now
            >
              <Popup>
                <div className="text-center">
                  <strong>{place.name}</strong>
                  <div className="text-sm mt-1">
                    {place.visited ? "✓ Visited" : "Want to visit"}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </CustomMarkerClusterGroup>
      </MapContainer>
    </motion.div>
  );
};

export default TravelMap;
