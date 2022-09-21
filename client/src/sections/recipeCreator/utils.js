export const formSchema = {
  recipe: {
    name: "",
    image: "",
    healthScore: 1,
    summary: "",
    steps: [],
  },
  diets: [],
};

export function validations(form, setFormData) {
  const errors = {};

  if (!form.name) {
    errors.name = "El nombre es un campo requerido.";
  } else if (form.name.length < 4) {
    errors.name = "El nombre debe tener minimo 4 caracteres.";
  }

  if (!form.summary) {
    errors.summary = "El resumen es un campo requerido.";
  }

  if (form.healthScore < 0) {
    setFormData((prevData) => {
      return {
        ...prevData,
        healthScore: 0,
      };
    });
  } else if (form.healthScore > 100) {
    setFormData((prevData) => {
      return {
        ...prevData,
        healthScore: 100,
      };
    });
  }

  return errors;
}
