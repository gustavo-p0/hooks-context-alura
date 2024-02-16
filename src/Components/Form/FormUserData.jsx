import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Button, TextField } from "../../../node_modules/@mui/material/index";
import { ValidationsContext } from "../contexts/FormValidations";
import { useErrors } from "../hooks/useErrors";

const FormUserData = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { validateLength } = useContext(ValidationsContext);
  const [errors, validateInput, canContinue] = useErrors({
    password: validateLength,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canContinue()) {
          onSubmit({ email, password });
        }
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
        name="password"
        error={!errors.password.valid}
        helperText={errors.password.helperText}
        onBlur={validateInput}
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
