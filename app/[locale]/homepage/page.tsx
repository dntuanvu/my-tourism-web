/* eslint-disable react/no-unescaped-entities */
"use client";
import "@/styles/globals.css";
import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Box, Container, Typography, Button, Chip } from "@mui/material";
import Card from "@/app/[locale]/homepage/components/Card";
import mockData, {
  categories,
  blogPosts,
  faqQuestions,
} from "./constants/mockData";
import { useRouter } from "next/navigation";
import Banner from "@/app/[locale]/homepage/components/Banner";
import SearchBar from "@/app/[locale]/homepage/components/Search";
import { useState } from "react";
import BlogCard from "@/app/[locale]/homepage/components/BlogCard";
import FAQ from "@/app/[locale]/homepage/components/FAQ";

export default function Home() {
  const t = useTranslations("Home");
  const router = useRouter();
  const [quickPlan, setQuickPlan] = useState("spiritual");
  const onSelectDate = (date: string) => {
    console.log(date);
  };

  const onViewDetail = (title: string) => {
    console.log(title);
    router.push(`detail/${title}`);
  };

  const handleClickCategory = ({ value }: { value: string }) => {
    setQuickPlan(value);
  };
  return (
    <div className="bg-paper">
      <Header />

      {/* <Hero /> */}
      <Banner />

      <Container maxWidth="lg">
        <Box bgcolor="background.paper" p={2}>
          <SearchBar />
          <Box mt={4}>
            <Box>
              <Typography variant="h5" fontWeight={600}>
                {t("topTour")}
              </Typography>
              <Typography variant="body1" color="text.disabled">
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
          </Box>

          <Box mt={4}>
            <Typography variant="h5" fontWeight={600}>
              {t("offer")}
            </Typography>
            <Typography variant="body1" color="text.disabled">
              {t("offerDesc")}
            </Typography>
            <Box
              height={200}
              sx={{
                backgroundImage: `url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              borderRadius={1}
            >
              <Box
                bgcolor="rgba(0,0,0,0.5)"
                p={2}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                height="100%"
                borderRadius={1}
                gap={0.5}
              >
                <Typography variant="h5" fontWeight={600} color="common.white">
                  Bali is waiting for you!
                </Typography>
                <Typography variant="body2" color="common.white">
                  Save 15% or more when you book trips before October 1, 2024
                </Typography>
                <Box mt={5}>
                  <Button
                    sx={{
                      backgroundColor: "#006CE8",
                      color: "#FFF",
                      padding: "4px 16px",
                      borderRadius: "4px",
                      textTransform: "capitalize",
                      fontSize: "1rem",
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "#0056b3",
                      },
                    }}
                    onClick={() => router.push("detail/bali")}
                  >
                    Join trip to Bali
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box mt={4}>
            <Typography variant="h5" fontWeight={600}>
              {t("quickPlan")}
            </Typography>
            <Typography variant="body1" color="text.disabled">
              {t("quickPlanDesc")}
            </Typography>

            <Box display="flex" gap={1} alignItems="center" height={45}>
              {categories.map((category, index) => (
                <Chip
                  key={index}
                  label={category.label}
                  icon={category.img}
                  variant={category.value === quickPlan ? "filled" : "outlined"}
                  onClick={() => handleClickCategory({ value: category.value })}
                />
              ))}
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
          </Box>

          <Box mt={4}>
            <Typography variant="h5" fontWeight={600}>
              {t("blog")}
            </Typography>
            <Typography variant="body1" color="text.disabled">
              {t("blogDesc")}
            </Typography>
            <Box display="flex" flexDirection="column" gap={2} mt={2}>
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  description={post.description}
                  imgSrc={post.imgSrc}
                  timeReading={post.timeReading}
                />
              ))}
            </Box>
          </Box>

          <Box mt={4} mb={4}>
            <Typography variant="h5" fontWeight={600}>
              {t("faq")}
            </Typography>
            <Box display="flex" flexDirection="column" gap={2} mt={2}>
              {faqQuestions.map((post, index) => (
                <FAQ
                  key={index}
                  question={post.question}
                  answer={post.answer}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
      {/* Add more components like Featured Tours, Testimonials, etc. */}
      <Footer />
    </div>
  );
}
