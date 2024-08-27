/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const IframeComponent: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 bg-gradient-to-r  text-white p-3 rounded-full">
      <iframe
        src="https://www.trip.com/partners/ad/SB553583?Allianceid=3883416&SID=22874365&trip_sub1="
        style={{ width: '728px', height: '90px', border: 'none' }}
        id="DB552995"
      ></iframe>
    </div>
  );
};

export default IframeComponent;
