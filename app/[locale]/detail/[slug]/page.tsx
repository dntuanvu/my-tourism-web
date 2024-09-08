// pages/tour/[id].tsx
"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TourDetail: React.FC = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">this is the tour detail page</h1>
        <p></p>
      </main>
      <Footer />
    </>
  );
};

export default TourDetail;
