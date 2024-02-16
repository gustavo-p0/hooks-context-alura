import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FormDeliveryData } from "./FormDeliveryData";
import { FormPersonalData } from "./FormPersonalData";
import { FormUserData } from "./FormUserData";
const FormHandler = ({ onSubmit }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setStep(step < forms.length - 1 ? step + 1 : step);
  };

  const collectData = (data) => {
    setFormData((prevData) => {
      return { ...prevData, ...data };
    });
    nextStep();
  };

  const forms = [
    // eslint-disable-next-line react/jsx-key
    <FormUserData onSubmit={collectData} />,
    // eslint-disable-next-line react/jsx-key
    <FormPersonalData onSubmit={collectData} />,
    // eslint-disable-next-line react/jsx-key
    <FormDeliveryData onSubmit={collectData} />,
    // eslint-disable-next-line react/jsx-key
    <Typography variant="subtitle1" align="center" component="h2">
      Obrigado pelo cadastro!
    </Typography>,
  ];

  useEffect(() => {
    if (step === forms.length - 1) {
      onSubmit(formData);
    }
  }, [formData, forms.length, step, onSubmit]);

  const displayCorrespondentForm = (step) => {
    const form = forms[step];
    if (form == null) {
      throw new Error("Formulário não disponível");
    }
    return form;
  };

  const renderForm = () => {
    try {
      return (
        <>
          <Stepper activeStep={step}>
            <Step>
              <StepLabel>Login</StepLabel>
            </Step>
            <Step>
              <StepLabel>Pessoal</StepLabel>
            </Step>
            <Step>
              <StepLabel>Entrega</StepLabel>
            </Step>
            <Step>
              <StepLabel>Finalização</StepLabel>
            </Step>
          </Stepper>
          {displayCorrespondentForm(step)}
        </>
      );
    } catch (error) {
      console.error(error);
      return (
        <Typography variant="h1" color="red">
          Erro!
        </Typography>
      );
    }
  };

  return renderForm();
};

FormHandler.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { FormHandler };
