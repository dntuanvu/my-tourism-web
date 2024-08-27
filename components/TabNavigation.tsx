'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FaHotel, FaPlane, FaTrain, FaCar, FaMapSigns, FaSuitcase } from 'react-icons/fa';
import clsx from 'clsx';

interface Tab {
  name: string;
  icon: ReactNode;
  iframeSrcDesktop: string;
  iframeSrcMobile: string;
}

// style={{ width: '100%', height: '500px', border: 'none', backgroundColor: 'transparent' }}
// style={{width:'900px', height:'200px', border:'none'}}

const tabs: Tab[] = [
  { name: 'Hotels', icon: <FaPlane />, iframeSrcDesktop: 'https://www.trip.com/partners/ad/S552960?Allianceid=3883416&SID=22874365&trip_sub1=', iframeSrcMobile: 'https://www.trip.com/partners/ad/S553163?Allianceid=3883416&SID=22874365&trip_sub1=' },
  { name: 'Flights', icon: <FaHotel />, iframeSrcDesktop: 'https://www.trip.com/partners/ad/S553037?Allianceid=3883416&SID=22874365&trip_sub1=', iframeSrcMobile: 'https://www.trip.com/partners/ad/S553184?Allianceid=3883416&SID=22874365&trip_sub1=' },
    //{ name: 'Trains', icon: FaTrain, iframeSrc: 'https://example.com/trains' },
    //{ name: 'Cars', icon: FaCar, iframeSrc: 'https://example.com/cars' },
    //{ name: 'Attractions & Tours', icon: FaMapSigns, iframeSrc: 'https://example.com/attractions' },
    //{ name: 'Flight + Hotel', icon: FaSuitcase, iframeSrc: 'https://example.com/flight-hotel' },
];

const TabNavigation = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile devices
    };

    // Check on mount and resize
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-center space-x-4 bg-gradient-to-r  text-white p-3 rounded-full">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={clsx(
              'flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none',
              {
                'bg-white text-blue-900': selectedTab.name === tab.name,
              }
            )}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-4">
        <iframe id="S552960"
            src={isMobile ? selectedTab.iframeSrcMobile : selectedTab.iframeSrcDesktop}
            className="w-full h-screen" allowFullScreen
            style={{width: isMobile ? '100%' : '900px', height: isMobile ? '500px' : '200px', border:'none', backgroundColor: 'transparent' }} />
      </div>
    </div>
  );
};

export default TabNavigation;
