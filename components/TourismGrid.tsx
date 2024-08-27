/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const TourismGrid: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Top tourism</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tour card example */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/path-to-tour-image.jpg" alt="Tour Image" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Tour Singapore - Malaysia</h3>
              <p className="text-gray-600">Visit Marina Bay, Singapore's signature landmark...</p>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-yellow-500 font-bold">From 150SGD</div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Book Now</button>
              </div>
            </div>
          </div>
          {/* Repeat similar tour cards as necessary */}
        </div>
      </div>
    </section>
  );
};

export default TourismGrid;
