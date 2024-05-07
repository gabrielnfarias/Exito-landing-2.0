import React, { useState } from "react";
// mui
import { Typography, Box, Stack } from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from "./Title";
import Paragraph from "./Paragraph";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState();

  const imageData = [
    {
      alt: "image1",
      url: "https://i.pinimg.com/564x/5d/92/97/5d929797b86afcacbc12152c9330cb82.jpg",
    },
    {
      alt: "image2",
      url: "https://i.pinimg.com/564x/d8/94/1d/d8941d5a7046cbc5b01816f5ed6b3dc4.jpg",
    },
    {
      alt: "image3",
      url: "https://i.pinimg.com/564x/27/d8/1d/27d81d5fe9f373afbdef81ab28530d15.jpg",
    },
    {
      alt: "image4",
      url: "https://i.pinimg.com/564x/d4/05/17/d40517c53236a3143566061d6e978e0a.jpg",
    },
    {
      alt: "image5",
      url: "https://i.pinimg.com/564x/ed/1e/9c/ed1e9cccddaa2713d59f9fe3af0339a0.jpg",
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 8,
        px: 2,
        display: { xs: "flex" },
      }}
    >
      <Box
        component="section"
        sx={{
          paddingBottom: 3,
        }}
      >
        <Title text={"Você  merece o melhor!"} textAlign={"center"} />
        <Typography
          variant="h5"
          component="h4"
          align="center"
          sx={{
            paddingTop: 1,
          }}
        ></Typography>
        <Paragraph
          text={`A New Age em parceria com o programa minha casa minha vida lhe dará o
            melhor!`}
          maxWidth={"sm"}
          mx={"auto"}
          textAlign={"center"}
        />
      </Box>

      <Box
        sx={{
          maxWidth: 700,
          width: "100%",
        }}
      >
        <Carousel
          centerSlidePercentage={40}
          thumbWidth={180}
          dynamicHeight={false}
          centerMode={false}
          showArrows={false}
          autoPlay={false}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Gallery;
