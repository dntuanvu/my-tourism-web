import IframeComponent from "./IframeComponent";
import StickyBanner from "./StickyBanner";
import TabNavigation from "./TabNavigation";

/*
<button className="mt-8 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md">
          Book more with us
        </button>
*/

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('./images/hero.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        
        <h1 className="text-10xl md:text-7xl font-bold leading-tight">
          Explore the Wonders of Vietnam
        </h1>
        
        <p className="mt-4 text-lg md:text-xs">
          Discover the beauty, culture, and history with our guided tours
        </p>
        
        <TabNavigation />
        
        
      </div>
    </section>
  );
};

export default Hero;
