import { Tour } from '@/types';
import TourCard from './TourCard';

const TourList = () => {
  const tours: Tour[] = [
    {
      id: 1,
      imageUrl: './images/Placeholder-Landscape.jpg',
      title: 'Amazing Hanoi Tour',
      description: 'Explore the capital city with our expert guides.',
      price: '$499',
    },
    {
      id: 2,
      imageUrl: './images/Placeholder-Landscape.jpg',
      title: 'Ho Chi Minh City Adventure',
      description: 'Dive into the bustling city life of Saigon.',
      price: '$399',
    },
    {
      id: 3,
      imageUrl: './images/Placeholder-Landscape.jpg',
      title: 'Ha Long Bay Cruise',
      description: 'Enjoy a scenic cruise in the stunning Ha Long Bay.',
      price: '$599',
    },
    {
      id: 4,
      imageUrl: './images/Placeholder-Landscape.jpg',
      title: 'Mekong Delta Experience',
      description: 'Discover the vibrant culture of the Mekong Delta.',
      price: '$299',
    },
    {
      id: 5,
      imageUrl: './images/Placeholder-Landscape.jpg',
      title: 'Ho Chi Minh City Adventure',
      description: 'Dive into the bustling city life of Saigon.',
      price: '$399',
    },
    {
      id: 6,
      imageUrl: './images/Placeholder-Landscape.jpg',
      title: 'Ha Long Bay Cruise',
      description: 'Enjoy a scenic cruise in the stunning Ha Long Bay.',
      price: '$599',
    },
    {
      id: 7,
      imageUrl: './images/Placeholder-Landscape.jpg',
      title: 'Mekong Delta Experience',
      description: 'Discover the vibrant culture of the Mekong Delta.',
      price: '$299',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default TourList;
