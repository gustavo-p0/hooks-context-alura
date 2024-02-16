import PropTypes from "prop-types";
import { useState } from "react";
import { FormDeliveryData } from "./FormDeliveryData";
import { FormPersonalData } from "./FormPersonalData";
import { FormUserData } from "./FormUserData";
const FormHandler = ({ onSubmit }) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step < 2 ? step + 1 : step);
  };

  const forms = [
    // eslint-disable-next-line react/jsx-key
    <FormUserData onSubmit={nextStep} />,
    // eslint-disable-next-line react/jsx-key
    <FormPersonalData onSubmit={nextStep} />,
    // eslint-disable-next-line react/jsx-key
    <FormDeliveryData onSubmit={onSubmit} />,
  ];

  const displayCorrespondentForm = (step) => {
    const form = forms[step];

    if (form === null) {
      throw new Error("Formulário não disponível");
    }
    return form;
  };

  return (() => {
    try {
      return displayCorrespondentForm(step);
    } catch (error) {
      console.error(error);
    }
  })();
};

FormHandler.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { FormHandler };
