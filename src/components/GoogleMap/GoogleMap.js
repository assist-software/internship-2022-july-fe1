import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '713px',
  height: '382px',
};

const center = {
  lat: 47.640272,
  lng: 26.259146,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB0C38O6O4IIHFaxHYhLZKF_Uv_0fvsJA4',
  });

  const [gmap, setGMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(gmap) {
    const bounds = new window.google.maps.LatLngBounds(center);
    gmap.fitBounds(bounds);
    setGMap(gmap);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setGMap(null);
  }, []);
  console.log(gmap);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      <> </> <Marker position={center} />
    </GoogleMap>
  ) : (
    <> </>
  );
}

export default React.memo(MyComponent);
