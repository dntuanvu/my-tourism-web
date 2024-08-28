/* eslint-disable react/no-unescaped-entities */

import "@/styles/globals.css";
import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Box } from "@mui/material";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      <Header />
      <span>{t("title")}</span>
      <Box sx={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "primary.main",
        backgroundColor: "red",
      }}>
        <span>{t("description")}</span>
      </Box>
      {/* <Hero /> */}

      {/* Add more components like Featured Tours, Testimonials, etc. */}

      {/* <Footer /> */}
    </div>
  );
}
