import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import DetailsCss from "../css/Details.css";
import familia from "../assets/familiii.jpeg";

const Details = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nome = document.getElementById("firstname");
    const email = document.getElementById("email");
    const celular = document.getElementById("celular");
    const cpf = document.getElementById("cpf");
    const regiao = document.getElementById("regiao");
    setSubmitting(true);

    const form = event.currentTarget;

    try {
      const response = await fetch(
        "https://deploy-bsckend-exito-complet-git-cac0d5-gabrielnfarias-projects.vercel.app/submit",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: form.nome.value,
            email: form.email.value,
            celular: form.celular.value,
            regiao: form.regiao.value,
            cpf: form.CPF.value,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Formulário preenchido com sucesso!");
        form.reset();
        const redirectTo = data.redirect || "http://localhost:3000/contact";
        window.location.href = redirectTo;
      } else {
        alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro inesperado. Tente novamente mais tarde.");
    } finally {
      setSubmitting(false);
    }
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
      />
      <Box className="container" sx={{ display: "flex", gap: "3.5rem" }}>
        <Box>
          <img className="img-box" src={familia} alt="" />
        </Box>

        <Box
          className="input-group"
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="celular"
            label="Celular"
            type="tel"
            id="celular"
            autoComplete="current-phone"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="regiao"
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
            type="text"
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
            disabled={submitting}
          >
            {submitting ? "Enviando..." : "Enviar"}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Details;
