import React from 'react';
import { GoogleMap as GoogleMapComponent, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

interface GoogleMapProps {
  height?: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  showInfoWindow?: boolean;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  height = "400px", 
  center = { lat: 28.291565, lng: -16.629129 }, // Tenerife coordinates
  zoom = 13,
  showInfoWindow = false
}) => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = React.useState(showInfoWindow);

  const mapStyles = [
    {
      featureType: 'all',
      elementType: 'geometry.fill',
      stylers: [{ color: '#f5f5f5' }]
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [{ color: '#e9e9e9' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }
  ];

  const mapOptions = {
    styles: mapStyles,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    zoomControl: true,
    gestureHandling: 'cooperative' as const
  };

  const markerIcon = {
    path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    fillColor: '#E0C469',
    fillOpacity: 1,
    strokeColor: '#252525',
    strokeWeight: 2,
    scale: 1.5,
    anchor: { x: 12, y: 24 } as google.maps.Point
  };

  const handleMarkerClick = () => {
    setIsInfoWindowOpen(true);
  };

  const handleMapClick = () => {
    setIsInfoWindowOpen(false);
  };

  // Get API key from environment variable
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex items-center justify-center border border-red-200" style={{ height }}>
        <div className="text-center p-8 max-w-md">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="font-medium text-red-800 mb-2">Google Maps API Key Missing</h3>
          <p className="text-sm text-red-600 mb-4">
            Please add VITE_GOOGLE_MAPS_API_KEY to your .env.local file
          </p>
          <p className="text-xs text-red-500">
            Example: <code className="bg-red-100 px-1 rounded">VITE_GOOGLE_MAPS_API_KEY=your_api_key_here</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200" style={{ height }}>
      <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
        <GoogleMapComponent
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onClick={handleMapClick}
        >
          <Marker
            position={center}
            title="Luxe Excursions Tenerife"
            icon={markerIcon}
            onClick={handleMarkerClick}
          />
          
          {isInfoWindowOpen && (
            <InfoWindow
              position={center}
              onCloseClick={() => setIsInfoWindowOpen(false)}
            >
              <div className="p-2">
                <h3 className="font-semibold text-[#252525] mb-1">Luxe Excursions Tenerife</h3>
                <p className="text-sm text-[#5A5A5A] mb-2">C. Hellada, 8.38678 Adeje, Santa Cruz de Tenerife, Spain</p>
                <div className="flex items-center gap-2 text-xs text-[#5A5A5A]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+34 722 645 670</span>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMapComponent>
      </LoadScript>
    </div>
  );
};

export default GoogleMap; 