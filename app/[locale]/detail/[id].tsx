// pages/tour/[id].tsx
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Tour } from '../../../types';

const TourDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch or use static data for the tour detail based on `id`
  const tour: Tour = {
    id: id as unknown as number, 
    title: `Tour ${id}`, 
    description: `Details for tour ${id}`,
    imageUrl: '',
    price: ''
  };

  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">{tour.title}</h1>
        <p>{tour.description}</p>
      </main>
      <Footer />
    </>
  );
};

export default TourDetail;
