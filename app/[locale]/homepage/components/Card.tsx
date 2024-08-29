"use client";
import {
  Box,
  Button,
  Container,
  Link,
  Typography,
  Chip,
  Rating,
} from "@mui/material";
import Image from "next/image";
import _ from "lodash";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlightIcon from "@mui/icons-material/Flight";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

interface CardProps {
  title: string;
  description: string;
  day: string | number;
  transportation: string;
  price: number;
  salePrice?: number;
  star: number;
  dateAvailable: string[];
  onSelectDate: (date: string) => void;
  imgSrc: string;
  isSale: boolean;
  onViewDetail: (slug: string) => void;
  slug: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  day,
  transportation,
  price,
  salePrice,
  star,
  dateAvailable,
  onSelectDate,
  imgSrc,
  isSale,
  slug,
  onViewDetail,
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
        "&:hover": {
          boxShadow: 3,
          cursor: "pointer",
        },
      }}
      gap={2}
      onClick={() => onViewDetail(slug)}
    >
      <Box>
        <Image src={imgSrc} alt={title} width={130} height="260" />
      </Box>
      <Box
        sx={{
          width: 230,
          padding: 1,
        }}
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        rowGap={0.5}
      >
        <Typography variant="h6" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="textDisabled" fontSize={12}>
          {_.truncate(description, {
            length: 65,
            omission: "...",
          })}
        </Typography>
        <Box display="flex" justifyContent="start" alignItems="center" gap={1}>
          <AccessTimeIcon color="primary" fontSize="small" />
          <Typography variant="body2">Day {day}</Typography>
        </Box>
        <Box display="flex" justifyContent="start" alignItems="center" gap={1}>
          {transportation === "Airplane" && (
            <FlightIcon color="primary" fontSize="small" />
          )}
          {transportation !== "Airplane" && (
            <AirportShuttleOutlinedIcon color="primary" fontSize="small" />
          )}
          <Typography variant="body2">{transportation}</Typography>
        </Box>
        <Box display="flex" justifyContent="start" alignItems="center" gap={1}>
          <ApartmentOutlinedIcon color="primary" fontSize="small" />
          <Rating value={star} max={star} readOnly />
        </Box>
        <Box display="flex" justifyContent="start" alignItems="center" gap={1}>
          <AttachMoneyOutlinedIcon color="primary" fontSize="small" />
          <Typography variant="body2">
            <Typography
              variant="body2"
              component="span"
              sx={{
                textDecoration: isSale ? "line-through" : "none",
                color: isSale ? "error.main" : "common.black",
              }}
              fontWeight={isSale ? 400 : 600}
            >
              {price}SGD
            </Typography>
            {salePrice !== 0 && (
              <Typography variant="body2" fontWeight={600} component="span">
                {" "}
                {salePrice}SGD
              </Typography>
            )}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="start" alignItems="start" gap={1}>
          <CalendarMonthOutlinedIcon color="primary" fontSize="small" />
          <Box display="flex" gap={0.5} flexWrap="wrap">
            {dateAvailable.map((date) => (
              <Chip
                key={date}
                label={`${date}`}
                variant="outlined"
                onClick={() => onSelectDate(date)}
                size="small"
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
