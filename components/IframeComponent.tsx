import React from 'react';

const IframeComponent: React.FC = () => {
  return (
    <div className="iframe-container">
        <iframe 
            src="https://www.trip.com/partners/ad/SB552953?Allianceid=3883416&SID=22874365&trip_sub1=" 
            style={{width:'728px', height:'90px', border:'none'}} 
            allowTransparency={true} scrolling="no" frameBorder="0" id="S552960" />
    </div>
  );
};

export default IframeComponent;
