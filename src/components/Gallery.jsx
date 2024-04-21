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
      url: "https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/434773199_2757270704429006_8361040006911613125_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2ruqbjtJ__YAb5UCe4b&_nc_ht=scontent-gru2-2.xx&oh=00_AfB5oJGUOMtmGKW1McdQj4TK7FaX_HMhp2E6BSZNmSq3zg&oe=66221C06",
    },
    {
      alt: "image2",
      url: "https://scontent-gru2-1.xx.fbcdn.net/v/t45.5328-4/421756813_7016263818477669_6198289421115821393_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=vICl5tvCau4Ab7u7pwW&_nc_ht=scontent-gru2-1.xx&oh=00_AfDE4NHEunwQEFhPQ4a2iVGMBDTy_a_cPeBQxS-5CWN_og&oe=66222FFC",
    },
    {
      alt: "image3",
      url: "https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/434466626_2757274684428608_7349485361989643933_n.jpg?stp=dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0FUUxOhcPmsAb5W8KxX&_nc_ht=scontent-gru1-2.xx&oh=00_AfA5Z4ypP1v68Z3QJtUB-NvF-_gqzIvbsfuFwY4Jf8HB3g&oe=6622118B",
    },
    {
      alt: "image4",
      url: "https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/434728495_2757270641095679_9139232810463090654_n.jpg?stp=dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1n81BZMFLzgAb79tyB_&_nc_ht=scontent-gru2-1.xx&oh=00_AfATRw1NLh3bC_g8Jw26EI75lf5V4rLx5TqhV3yHcetspw&oe=66223CC6",
    },
    {
      alt: "image5",
      url: "https://scontent-gru1-1.xx.fbcdn.net/v/t45.5328-4/431827495_389813777250374_3485076261312384012_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=7l64pNMdDS4Ab6PIsLW&_nc_oc=Adh349z8leDufwdlsRbZN-IgsigYFFL2a0IGFS3y-WS5vZrqbVreTi7RjKsSoUBFY0KYpkRQM93tnywWPW0lMTrk&_nc_ht=scontent-gru1-1.xx&oh=00_AfCpvkYiJ7tGxNf1zqAfMztMsPx_vLasEqE_FS52eZ3n0Q&oe=66223EB9",
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
