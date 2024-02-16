import { Box, Button, TextField } from "@mui/material";
const FormDeliveryData = () => {
  return (
    <form action="">
      <TextField
        id="cep"
        type="number"
        label="CEP"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="endereco"
        type="text"
        label="Endereço"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Box display="flex" justifyContent={"space-between"}>
        <TextField
          id="numero"
          type="number"
          label="Número"
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="estado"
          type="text"
          label="Estado"
          variant="outlined"
          margin="normal"
        />
      </Box>
      <TextField
        id="cidade"
        type="text"
        label="Cidade"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="success" fullWidth>
        Finalizar
      </Button>
    </form>
  );
};

export { FormDeliveryData };
