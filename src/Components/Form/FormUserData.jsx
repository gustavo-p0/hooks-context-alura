import PropTypes from "prop-types";
import { Button, TextField } from "../../../node_modules/@mui/material/index";

const FormUserData = ({ onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      action=""
    >
      <TextField
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        fullWidth
        type="email"
        required
      />
      <TextField
        label="Senha"
        id="password"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        required
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
