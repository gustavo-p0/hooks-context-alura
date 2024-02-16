import { Container, Typography } from "@mui/material";
import "fontsource-roboto";
import { FormHandler } from "./Components/Form";

const App = () => {
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container component="article" maxWidth="md">
      <Typography
        variant="h3"
        component={"h1"}
        align="center"
        marginBottom={"36px"}
      >
        Formulário de cadastro
      </Typography>
      <FormHandler onSubmit={handleFormSubmit} />
    </Container>
  );
};

export { App };
