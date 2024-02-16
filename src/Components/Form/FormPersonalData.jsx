import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const FormPersonalData = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("");
  const [wantPromotions, setWantPromotions] = useState(true);
  const [wantNewsletter, setWantNewsletter] = useState(false);

  const [errors, setErrors] = useState({
    cpf: { valid: true, helperText: "" },
  });

  const validateCPF = (cpf) => {
    if (cpf.length !== 11) {
      return { valid: false, helperText: "CPF deve ter 11 dígitos" };
    }

    return { valid: true, helperText: "" };
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, surname, cpf, wantPromotions, wantNewsletter });
      }}
      action=""
    >
      <TextField
        label="Nome"
        id="nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
        required
      />
      <TextField
        label="Sobrenome"
        id="sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={surname}
        onChange={(e) => {
          setSurname(e.currentTarget.value);
        }}
        required
      />
      <TextField
        label="CPF"
        id="cpf"
        variant="outlined"
        fullWidth
        error={!errors.cpf.valid}
        helperText={errors.cpf.helperText}
        margin="normal"
        value={cpf}
        onBlur={() => {
          setErrors({
            cpf: validateCPF(cpf),
          });
        }}
        onChange={(e) => {
          setCpf(e.currentTarget.value);
        }}
        required
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            checked={wantPromotions}
            onChange={(e) => {
              setWantPromotions(e.currentTarget.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            checked={wantNewsletter}
            onChange={(e) => {
              setWantNewsletter(e.currentTarget.checked);
            }}
          />
        }
      />
      <Button type="submit" variant="contained" color="secondary" fullWidth>
        Prosseguir
      </Button>
    </form>
  );
};

FormPersonalData.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { FormPersonalData };
