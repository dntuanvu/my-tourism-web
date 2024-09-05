import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Container } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Item = ({
  item,
}: {
  item: {
    slug: string;
    img: string;
  };
}) => {
  const router = useRouter();
  return (
    <Paper
      onClick={() => {
        router.push(`detail/${item.slug}`);
      }}
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box
        sx={{
          height: 400,
          background: `url(${item.img}) no-repeat center center`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Paper>
  );
};

const Banner = () => {
  const items = [
    {
      slug: "random-1",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      slug: "random-2",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      slug: "random-3",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <Container maxWidth="lg">
      <Box bgcolor="background.paper">
        <Carousel
          fullHeightHover={true} // We want the nav buttons wrapper to only be as big as the button element is
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              backgroundColor: "#003566",
              borderRadius: 100,
            },
          }}
          stopAutoPlayOnHover
          animation="slide"
          interval={5000}
          indicators={true}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default Banner;
