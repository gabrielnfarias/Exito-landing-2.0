import React from "react";
import { Grid, Typography, IconButton, Card, CardContent } from "@mui/material";

// icons
import { FcApproval } from "react-icons/fc";
import { FcDebt } from "react-icons/fc";
import { FcNegativeDynamic } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";

// components
import Title from "./Title";
import Paragraph from "./Paragraph";

const Content = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 2,
      }}
    >
      <Grid item xs={12} sm={12} md={5} component="section">
        <Title text={"Benefícios do Programa!"} textAlign={"start"} />

        <Typography
          variant="h6"
          component="h4"
          sx={{
            fontWeight: "400",
            paddingTop: 1,
          }}
        >
          Os melhores benefícios do mercado.
        </Typography>

        <Paragraph
          text={`
            O programa Minha Casa Minha Vida oferece subsídios de até R$ 55.000, renda familiar a partir de R$ 1.800, entrada 100% parcelada, possibilidade de utilizar o FGTS para abater a entrada e os menores juros do Brasil.`}
          maxWidth={"100%"}
          mx={0}
          textAlign={"start"}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              {" "}
              <FcApproval />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Demhab
              <Paragraph
                text={` A DEMHAB oferece subsídios de R$ 15 mil para famílias de até três salários mínimos, na compra da casa própria. 
                   `}
                maxWidth={"100%"}
                mx={0}
                textAlign={"center"}
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              {" "}
              <FcDebt />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Subsídio
              <Paragraph
                text={` Subsídio de até R$ 55.000,00 pela Caixa Econômica Federal para aquisição do seu imóvel próprio!
                   `}
                maxWidth={"100%"}
                mx={0}
                textAlign={"center"}
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={2}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Card
          square={true}
          sx={{
            boxShadow: "none",
            minHeight: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardContent></CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <FcNegativeDynamic />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Menor Taxa de juros do mercado!
              <Paragraph
                text={` Subsídio de até R$ 55.000,00 pela Caixa Econômica Federal para aquisição do seu imóvel próprio!
                   `}
                maxWidth={"100%"}
                mx={0}
                textAlign={"center"}
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <FcCurrencyExchange />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Use seu FGTS
              <Paragraph
                text={` Subsídio de até R$ 55.000,00 pela Caixa Econômica Federal para aquisição do seu imóvel próprio!
                   `}
                maxWidth={"100%"}
                mx={0}
                textAlign={"center"}
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          square={true}
          sx={{
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          <CardContent>
            <IconButton>
              <FcTodoList />
            </IconButton>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              Entrada 100% parcelada
              <Paragraph
                text={` Subsídio de até R$ 55.000,00 pela Caixa Econômica Federal para aquisição do seu imóvel próprio!
                   `}
                maxWidth={"100%"}
                mx={0}
                textAlign={"center"}
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Content;
