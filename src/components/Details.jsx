import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import familia from "../assets/familiii.jpeg";

const Details = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      nome: data.get("nome"),
      email: data.get("email"),
      celular: data.get("celular"),
      regiao: data.get("regiao"),
    });
  };

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Title text={"Não Perca essa oportunidade!"} textAlign={"center"} />
      <Paragraph
        text={"Faça uma Analise de Crédito agora com um de nossos consultores!"}
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />{" "}
      <Box sx={{ display: "flex", gap: "3.5rem" }}>
        <Box sx={{ boxShadow: "1px 1px 6px #0000010c;", borderRadius: "60px" }}>
          <img src={familia} alt="" />
        </Box>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            mt: 1,
            py: 2,
          }}
        >
          {" "}
          <TextField
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome completo"
            name="nome"
            autoComplete="nome"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Celular"
            type="phone"
            id="celular"
            autoComplete="current-phone"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Regiao"
            label="Região de interesse (Porto Alegre e região metropolitana)"
            type="text"
            id="regiao"
            autoComplete="regiao"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="CPF"
            label="CPF"
            type="CPF"
            id="CPF"
            autoComplete="CPF"
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            size="medium"
            sx={{
              fontSize: "0.9rem",
              textTransform: "capitalize",
              py: 2,
              mt: 3,
              mb: 2,
              borderRadius: 0,
              backgroundColor: "#14192d",
              "&:hover": {
                backgroundColor: "#1e2a5a",
              },
            }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Details;
