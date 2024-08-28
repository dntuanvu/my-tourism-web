"use client";
import { Box, Button, Container, Link, Typography, Chip } from "@mui/material";
import Image from "next/image";
import _ from "lodash";

interface CardProps {
  title: string;
  description: string;
  day: string;
  transportation: string;
  price: number;
  salePrice?: number;
  rating: number;
  dateAvailable: string[];
  onSelectDate: (date: string) => void;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  day,
  transportation,
  price,
  salePrice,
  rating,
  dateAvailable,
  onSelectDate,
  imgSrc,
}) => {
  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,

        width: 360,
        height: 260,
      }}
      gap={2}
    >
      <Box>
        <Image src={imgSrc} alt={title} width={130} height="260" />
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: 1,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">
          {_.truncate(description, {
            length: 100,
            omission: "...",
          })}
        </Typography>

        <Typography variant="body2">
          Day {day} - {transportation}
        </Typography>
        <Typography variant="body2">
          Price: {salePrice ?? price} ({salePrice ? "Sale" : "Regular"})
        </Typography>
        <Typography variant="body2">Rating: {rating}</Typography>
        <Box display="flex" gap={0.5}>
          {dateAvailable.map((date) => (
            <Chip
              key={date}
              label={`${date}`}
              variant="outlined"
              onClick={() => onSelectDate(date)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
