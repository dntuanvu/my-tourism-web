import SpiritualIcon from "@/app/img/homepage/Spiritual";
import RomanceIcon from "@/app/img/homepage/Romance";
import RelaxIcon from "@/app/img/homepage/Relax";
import React from "react";
export default [
  {
    id: 1,
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    imgSrc:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    day: "6",
    transportation: "Coach",
    price: 100,
    salePrice: 80,
    star: 4,
    dateAvailable: ["10/9", "15/9", "20/9", "25/9", "30/9"],
    isSale: true,
    slug: "1",
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    imgSrc:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    day: "6",
    transportation: "Airplane",
    price: 100,
    salePrice: 80,
    star: 4,
    dateAvailable: ["10/9", "15/9"],
    isSale: true,
    slug: "1",
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 2",
    imgSrc:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    day: "6",
    transportation: "Car",
    price: 100,
    salePrice: 0,
    star: 4,
    dateAvailable: ["10/9", "15/9"],
    isSale: false,
    slug: "2",
  },
];

export const categories = [
  {
    label: "Spiritual",
    value: "spiritual",
    img: <SpiritualIcon />,
    variant: "filled",
  },
  {
    label: "Romance",
    value: "romance",
    img: <RomanceIcon />,
    variant: "outlined",
  },
  {
    label: "Relax",
    value: "relax",
    img: <RelaxIcon />,
    variant: "outlined",
  },
  {
    label: "Adventure",
    value: "adventure",
    img: <RelaxIcon />,
    variant: "outlined",
  },
];

export const blogPosts = [
  {
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    imgSrc:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "1",
    timeReading: "5 min read",
  },
  {
    title: "Title 2",
    description: "Description 2",
    imgSrc:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "2",
    timeReading: "5 min read",
  },
  {
    title: "Title 3",
    description: "Description 3",
    imgSrc:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "3",
    timeReading: "5 min read",
  },
];

export const faqQuestions = [
  {
    question: "Question 1",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Question 2",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Question 3",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
