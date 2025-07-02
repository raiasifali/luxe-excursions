# Google Maps Setup Guide

## Getting Started

1. **Get a Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the "Maps JavaScript API" and "Places API"
   - Create credentials (API Key)
   - Restrict the API key to your domain for security

2. **Add API Key to Environment:**
   Create a `.env.local` file in your project root and add:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. **Usage:**
   The Google Maps component is already integrated in your contact page and can be used anywhere in your app:

   ```tsx
   import GoogleMap from "@/components/ui/google-map";
   
   <GoogleMap 
     height="400px" 
     center={{ lat: 35.6127, lng: -77.3663 }} 
     zoom={13} 
   />
   ```

## Features

- ✅ Responsive design
- ✅ Custom styling matching your brand colors
- ✅ Interactive marker with info window
- ✅ Loading states and error handling
- ✅ Optimized for Next.js
- ✅ TypeScript support

## Current Address

The map is configured to show: **8460 Rockville Ave. Greenville, NC 27834** 