const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('./images/hero.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Explore the Wonders of Vietnam
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Discover the beauty, culture, and history with our guided tours
        </p>
        <button className="mt-8 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md">
          Book Your Tour
        </button>
      </div>
    </section>
  );
};

export default Hero;
