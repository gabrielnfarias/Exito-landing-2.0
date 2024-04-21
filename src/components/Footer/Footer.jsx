import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 8,
    textAlign: "center",
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ededed",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 30,
    },
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <StackColumn>
        <FooterTitle text={"Endereço"} />
        <FooterLink text={"Av da cavalhada 3884, cavalhada, Porto Alegre"} />
        <FooterLink text={" (51) 98164-8364"} />
        <FooterLink text={"naassessoria2023@gmail.com"} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"Nosso serviços"} />
        <FooterLink
          text={"Oferecemos o melhor serviço de suporte e assessoria!"}
        />
        <FooterLink text={"Assessoria vitalicia durante 3 anos"} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={"Sobre nós"} />
        <FooterLink
          text={
            " Na New Age, líderes em assessoria imobiliária. Mais de 5 anos de experiência. Paixão, conhecimento e inovação. Soluções personalizadas. Missão: simplificar o processo imobiliário, construir relacionamentos duradouros com confiança e resultados excepcionais."
          }
        />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"New Age Assessoria"} />
        <Stack
          direction="row"
          width="70px"
          maxWidth="100%"
          justifyContent="space-between"
        >
          <Link
            href="https://www.instagram.com/new.age_assessoria/"
            target="_blank"
            variant="body2"
            sx={{
              color: "#414141",
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100089619264071"
            target="_blank"
            variant="body2"
            sx={{
              color: "#414141",
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <FacebookIcon />
          </Link>
        </Stack>
        <Typography variant="caption" component="p">
          &copy; 2024 New Age Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  );
};

export default Footer;
