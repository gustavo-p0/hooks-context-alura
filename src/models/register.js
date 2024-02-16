const validateCPF = (cpf) => {
  if (cpf.length !== 11) {
    return { valid: false, helperText: "Deve ter 11 dígitos." };
  }

  return { valid: true, helperText: "" };
};

const validateLength = (string) => {
  if (string.length < 4 || string.length > 72) {
    return { valid: false, helperText: "Deve ter entre 4 e 72 dígitos." };
  }

  return { valid: true, helperText: "" };
};

export { validateCPF, validateLength };
