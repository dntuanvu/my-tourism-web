"use client";
import { Box, Button, Typography, Chip, Rating } from "@mui/material";
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
        rowGap={0.2}
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
              <Button
                key={date}
                onClick={() => onSelectDate(date)}
                sx={{
                  border: "1px solid #006CE8",
                  padding: "0",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  width: "30px",
                  color: "#006CE8",
                  "&:hover": {
                    backgroundColor: "#006CE8",
                    color: "#FFF",
                  },
                  "&:active": {
                    backgroundColor: "#006CE8",
                    color: "#FFF",
                    border: "1px solid #FFF",
                  },
                  "&:focus": {
                    backgroundColor: "#006CE8",
                    color: "#FFF",
                    border: "1px solid #FFF",
                  },
                }}
              >
                {date}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
