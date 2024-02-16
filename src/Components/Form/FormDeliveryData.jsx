import { Box, Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
const FormDeliveryData = ({ onSubmit }) => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ cep, address, number, region, city });
      }}
    >
      <TextField
        id="cep"
        type="number"
        label="CEP"
        variant="outlined"
        margin="normal"
        value={cep}
        onChange={(e) => setCep(e.currentTarget.value)}
        required
      />
      <TextField
        id="endereco"
        type="text"
        label="Endereço"
        variant="outlined"
        fullWidth
        margin="normal"
        value={address}
        onChange={(e) => setAddress(e.currentTarget.value)}
        required
      />
      <Box display="flex" justifyContent={"space-between"}>
        <TextField
          id="numero"
          type="number"
          label="Número"
          variant="outlined"
          margin="normal"
          value={number}
          onChange={(e) => setNumber(e.currentTarget.value)}
          required
        />
        <TextField
          id="estado"
          type="text"
          label="Estado"
          variant="outlined"
          margin="normal"
          value={region}
          onChange={(e) => setRegion(e.currentTarget.value)}
          required
        />
      </Box>
      <TextField
        id="cidade"
        type="text"
        label="Cidade"
        variant="outlined"
        fullWidth
        margin="normal"
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        required
      />
      <Button type="submit" variant="contained" color="success" fullWidth>
        Finalizar
      </Button>
    </form>
  );
};

FormDeliveryData.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { FormDeliveryData };
