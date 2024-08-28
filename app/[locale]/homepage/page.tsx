/* eslint-disable react/no-unescaped-entities */

import "@/styles/globals.css";
import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      {/* <Header /> */}
      <span>{t("title")}</span>
      {/* <Hero /> */}

      {/* Add more components like Featured Tours, Testimonials, etc. */}

      {/* <Footer /> */}
    </div>
  );
}
