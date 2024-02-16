import { Container, Typography } from "@mui/material";
import "fontsource-roboto";
import { FormHandler } from "./Components/Form";
import { ValidationsContextProvider } from "./Components/contexts/FormValidations";

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
      <ValidationsContextProvider>
        <FormHandler onSubmit={handleFormSubmit} />
      </ValidationsContextProvider>
    </Container>
  );
};

export { App };
