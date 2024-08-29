/* eslint-disable react/no-unescaped-entities */
"use client";
import "@/styles/globals.css";
import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Box, Container, Typography } from "@mui/material";
import Card from "./components/Card";
import mockData from "./constants/mockData";
import { useRouter } from "next/navigation";

export default function Home() {
  const t = useTranslations("Home");
  const router = useRouter();
  const onSelectDate = (date: string) => {
    console.log(date);
  };

  const onViewDetail = (title: string) => {
    console.log(title);
    router.push(`detail/${title}`);
  };
  return (
    <div className="bg-paper">
      <Header />

      {/* <Hero /> */}
      <Container maxWidth="lg">
        <Box bgcolor="background.paper" p={2}>
          <Box>
            <Typography variant="h5" fontWeight={600}>{t("topTour")}</Typography>
            <Typography
              variant="body1"
              color="text.disabled"
            >
              {t("topTourDesc")}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            {mockData.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                description={data.description}
                imgSrc={data.imgSrc}
                day={data.day}
                transportation={data.transportation}
                price={data.price}
                salePrice={data.salePrice}
                isSale={data.isSale}
                star={data.star}
                dateAvailable={data.dateAvailable}
                slug={data.slug}
                onSelectDate={onSelectDate}
                onViewDetail={onViewDetail}
              />
            ))}
          </Box>
          {/* <Card
            title="Card Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
            imgSrc="https://images.unsplash.com/random"
            day="1"
            transportation="Bus"
            price={100}
            salePrice={90}
            isSale={true}
            rating={4}
            dateAvailable={["10/9", "15/9"]}
            onSelectDate={onSelectDate}
          /> */}
        </Box>
      </Container>
      {/* Add more components like Featured Tours, Testimonials, etc. */}
      <Footer />
    </div>
  );
}
