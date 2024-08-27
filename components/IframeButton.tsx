'use client';

// https://www.trip.com/partners/ad/SB552953?Allianceid=3883416&SID=22874365&trip_sub1=

import React, { useState } from 'react';

const IframeButton: React.FC = () => {
    const [showIframe, setShowIframe] = useState(false);

    const toggleIframe = () => {
        setShowIframe(!showIframe);
    };

    return (
        <div>
            <button className="mt-8 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md" onClick={toggleIframe}>
                {showIframe ? 'Hide Iframe' : 'Book With Us'}
            </button>
            {showIframe && (
                <div className="mt-4">
                    <iframe
                        src="https://www.trip.com/partners/ad/SB552953?Allianceid=3883416&SID=22874365&trip_sub1="
                        style={{ width: '728px', height: '90px', border: 'none' }}
                        id="S552960"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default IframeButton;
