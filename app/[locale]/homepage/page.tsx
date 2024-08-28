/* eslint-disable react/no-unescaped-entities */
"use client";
import "@/styles/globals.css";
import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Box } from "@mui/material";
import Card from "./components/Card";

export default function Home() {
  const t = useTranslations("Home");
  const onSelectDate = (date: string) => {
    console.log(date);
  };
  return (
    <div>
      <Header />
      <span>{t("title")}</span>
      <Box
        sx={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "primary.main",
          backgroundColor: "red",
        }}
      >
        <span>{t("description")}</span>
      </Box>
      {/* <Hero /> */}
      <Card
        title="Card Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
        imgSrc="https://images.unsplash.com/random"
        day="1"
        transportation="Bus"
        price={100}
        salePrice={90}
        rating={4}
        dateAvailable={["10/9", "15/9"]}
        onSelectDate={onSelectDate}
      />
      {/* Add more components like Featured Tours, Testimonials, etc. */}
      {/* <Footer /> */}
    </div>
  );
}
