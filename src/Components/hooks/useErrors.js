import { useState } from "react";

const useErrors = (trackedErrorInputs) => {
  const errorsObj = {};
  for (let key in trackedErrorInputs) {
    errorsObj[key] = { valid: true, helperText: "" };
  }

  const [errors, setErrors] = useState(errorsObj);

  const validateInput = (event) => {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = trackedErrorInputs[name](value);
    setErrors(newState);
  };

  const canContinue = () => {
    const hasInvalidField = Object.values(errors).find((item) => !item.valid);
    return !hasInvalidField;
  };

  return [errors, validateInput, canContinue];
};

export { useErrors };
