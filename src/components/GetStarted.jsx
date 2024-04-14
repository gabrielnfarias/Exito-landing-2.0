import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../assets/familia-feliz.jpeg";
import imgDetail2 from "../assets/empreendimento.jpeg";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title
            text={"Tenha Mais Conforto e segurança!"}
            textAlign={"start"}
          />
          <CustomTypography>
            O Minha Casa Minha Vida oferece conforto, estabilidade e segurança
            na aquisição de imóveis, realizando sonhos e permitindo construir um
            futuro próspero. Com subsídios e taxas de juros reduzidas, facilita
            o acesso à moradia própria, transformando espaços físicos em lares
            onde esperanças e sonhos se tornam realidade.
            <br />
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title
            text={"Imóveis em toda Porto Alegre e Região!"}
            textAlign={"start"}
          />
          <CustomTypography>
            o programa oferece uma ampla variedade de opções de imóveis,
            adaptadas às necessidades e possibilidades de cada família. Seja
            para adquirir uma casa nova ou um apartamento, o Minha Casa Minha
            Vida se adapta às diversas realidades e preferências dos
            beneficiários.
          </CustomTypography>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
