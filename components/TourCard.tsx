/* eslint-disable @next/next/no-img-element */
type Tour = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
};

const TourCard = ({ tour }: { tour: Tour }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
      <img
        src={tour.imageUrl}
        alt={tour.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">
          {tour.title}
        </h2>
        <p className="text-gray-600 mb-4">{tour.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-red-600 font-bold">{tour.price}</span>
          <a
            href={`/tours/${tour.id}`}
            className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
          >
            View Tour
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
