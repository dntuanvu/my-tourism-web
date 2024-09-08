import { Box, Typography } from "@mui/material";
import Image from "next/image";
import _ from "lodash";

type BlogCardProps = {
  title: string;
  description: string;
  imgSrc: string;
  timeReading: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imgSrc,
  timeReading,
}) => {
  return (
    <Box
      display="flex"
      gap={2}
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        width: "100%",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Box
        position="relative"
        height={"100%"}
        sx={{
          width: 200,
          overflow: "hidden",
          borderTopLeftRadius: 2,
          borderBottomLeftRadius: 2,
          paddingTop: 1,
          paddingLeft: 1,
        }}
      >
        <Image
          src={imgSrc}
          alt="blog"
          width={200}
          height="200"
          style={{
            borderRadius: "4px 0 0 4px",
            minHeight: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box p={2} width="100%">
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2" color="common.black">
          {_.truncate(description, {
            length: 200,
            omission: "...",
          })}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          {timeReading}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCard;
