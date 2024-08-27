// components/ResponsiveIframe.tsx
import React from 'react';

const ResponsiveIframe: React.FC = () => {
  return (
    <div className="iframe-container">
      <iframe
        src="https://example.com"
        frameBorder="0"
        className="w-full h-48 md:h-96"  // Adjust the height based on the breakpoint
        style={{ border: 'none', backgroundColor: 'transparent' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;
