import { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
const apiKey = import.meta.env.VITE_MAPS_API_KEY;

export function PropertyMap({ address }) {
  const [center, setCenter] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: ['places'],
    version: 'weekly',
  });

  useEffect(() => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          setCenter({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        }
      });
    }
  }, [address, isLoaded]);

  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <div style={{ height: '700px', width: '100%', marginTop: '32px' }}>
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ height: '100%', width: '100%' }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
