import PropTypes from "prop-types";
import { createContext } from "react";
import { validateCPF, validateLength } from "../../models/register";

const ValidationsContext = createContext();

const ValidationsContextProvider = ({ children }) => {
  return (
    <ValidationsContext.Provider value={{ validateCPF, validateLength }}>
      {children}
    </ValidationsContext.Provider>
  );
};

ValidationsContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export { ValidationsContext, ValidationsContextProvider };
