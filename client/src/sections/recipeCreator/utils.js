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

export function validations(form) {
  const errors = {};

  if (!form.name) {
    errors.name = "El nombre es un campo requerido.";
  } else if (form.name.length < 4) {
    errors.name = "El nombre debe tener minimo 4 caracteres.";
  }

  if (!form.summary) {
    errors.summary = "El resumen es un campo requerido.";
  }

  return errors;
}
