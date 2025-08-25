'use client';

import { useEffect } from 'react';
import { envVars } from '@/config';

const BookingKitWidget = () => {
  useEffect(() => {
    const scriptId = 'bookingkit-script';
    const widgetId = envVars.widgetId;

    console.log('Widget ID: ' + widgetId);

    // Load BookingKit script if not already loaded
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = widgetId;
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }

    // Inject custom CSS to hide footer and language selector
    const style = document.createElement('style');
    style.innerHTML = `
      .bk-events-footer, .bk-header-language {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Optional: cleanup on unmount
    return () => {
      const styleTag = document.head.querySelector('style');
      if (styleTag) document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div
      id="bookingKitContainer"
      data-cw="db460d6a5246d78d2ed2b8983fb18eee"
      style={{ width: '100%' }}
    />
  );
};

export default BookingKitWidget;
