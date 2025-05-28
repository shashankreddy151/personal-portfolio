import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';
import { useMap } from 'react-leaflet';

interface MarkerClusterGroupProps {
  children: React.ReactNode;
}

const MarkerClusterGroup: React.FC<MarkerClusterGroupProps> = ({ children }) => {
  const map = useMap();
  
  useEffect(() => {
    if (!map) return;

    // Create cluster group with styling to match screenshot - using just location pins, no numbers
    const clusterGroup = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 35,
      iconCreateFunction: function(cluster) {
        // Create a custom icon for clusters without numbers, just like individual markers
        return L.divIcon({
          html: `<div class="cluster-pin-icon"><img src="/images/leaflet/cluster-marker.svg" alt="Cluster" /></div>`,
          className: 'custom-marker-cluster',
          iconSize: [36, 48],
          iconAnchor: [18, 48],
          popupAnchor: [0, -48]
        });
      },
      // Use dark clusters like in screenshot
      polygonOptions: {
        fillColor: '#000',
        color: '#000',
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0.2
      }
    });

    // Process all markers
    React.Children.forEach(children, (child: any) => {
      if (!child || !child.props || !child.props.position) return;
      
      // Create marker with the props from the React component
      const marker = L.marker(child.props.position, {
        icon: child.props.icon,
      });
      
      // Find and bind popup content if it exists
      let popupContent = null;
      React.Children.forEach(child.props.children, (subChild: any) => {
        if (subChild && subChild.type && subChild.type.name === 'Popup') {
          popupContent = subChild.props.children;
        }
      });
      
      if (popupContent) {
        marker.bindPopup(popupContent);
      }
      
      clusterGroup.addLayer(marker);
    });

    // Add the cluster group to the map
    map.addLayer(clusterGroup);

    return () => {
      map.removeLayer(clusterGroup);
    };
  }, [map, children]);

  return null;
};

export default MarkerClusterGroup;