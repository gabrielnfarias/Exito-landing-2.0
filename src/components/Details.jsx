import React, { useState } from "react";
import * as yup from "yup"; // Importação do yup
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import DetailsCss from "../css/Details.css";
import familia from "../assets/familiii.jpeg";

const Details = () => {
  // Define o estado para cada campo do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [cpf, setCpf] = useState("");
  const [regiao, setRegiao] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({}); // Estado para armazenar erros de validação

  const validationSchema = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    celular: yup.string().required("Celular é obrigatório"),
    cpf: yup.string().required("CPF é obrigatório"),
    regiao: yup.string().required("Região é obrigatória"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate(
        { nome, email, celular, cpf, regiao },
        { abortEarly: false }
      );

      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          nome,
          celular,
          cpf,
          regiao,
        }),
      });
      setSubmitting(true);

      if (response.ok) {
        const data = await response.json();
        alert("Formulário preenchido com sucesso!");

        const redirectTo = data.redirect || "http://localhost:3001/contact";
        window.location.href = redirectTo;
      } else {
        alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.log(error.message);
      alert("Preencha todos os campos!");
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
        text={"Faça uma Análise de Crédito agora com um de nossos consultores!"}
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome completo"
            name="nome"
            autoComplete="nome"
            autoFocus
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            value={celular}
            onChange={(event) => setCelular(event.target.value)}
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
            value={regiao}
            onChange={(event) => setRegiao(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="CPF"
            label="CPF"
            type="text"
            id="cpf"
            autoComplete="CPF"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
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
