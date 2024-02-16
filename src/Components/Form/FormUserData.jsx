import PropTypes from "prop-types";
import { useState } from "react";
import { Button, TextField } from "../../../node_modules/@mui/material/index";

const FormUserData = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ email, password });
      }}
    >
      <TextField
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        fullWidth
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      />
      <TextField
        label="Senha"
        id="password"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Button type="submit" variant="contained" color="secondary" fullWidth>
        Prosseguir
      </Button>
    </form>
  );
};

FormUserData.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export { FormUserData };
