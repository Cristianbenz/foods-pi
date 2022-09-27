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
    errors.nameRequired = true;
  }
  
  if (form.name.length < 4) {
    errors.nameMin = true;
  }

  if(!/^([a-zA-z\s,]+)$/.test(form.name)){
    errors.nameWrong = true
  }

  if(form.image.length && !/^(http|https):.*(jpg|jpeg|jpe)$/.test(form.image)){
    errors.imageWrong = true
  }

  if (!form.summary) {
    errors.summaryRequired = true;
  }

  if (form.summary.length < 80) {
    errors.summaryMin = true;
  }

  if(!/^([a-zA-z0-9\s,.]+)$/.test(form.summary)){
    errors.summaryWrong = true
  }

  return errors;
}
