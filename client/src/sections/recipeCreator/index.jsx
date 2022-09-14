import { useState, useEffect } from "react";

import RecipeForm from "../../components/recipeForm";
import Card from "../../components/card";

import { CreateSection, DetailsContainer, Step } from "./styles";

export default function RecipeCreator() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    healthScore: 1,
    summary: "",
    steps: [],
    diets: [],
  });
  const [error, setError] = useState({});

  function onChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    setError(validations(formData));
  }, [formData]);

  function validations(form) {
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

  function stepsChange(arr) {

    setFormData((prevInfo) => {
      return {
        ...prevInfo,
        steps: arr,
      };
    });
  }

  return (
    <>
      <h1 className="title">¡Añade tu propia receta!</h1>
      <CreateSection>
        <RecipeForm
          data={formData}
          onChange={onChange}
          error={error}
          stepsChange={stepsChange}
        />
        <DetailsContainer>
        <Card name={formData.name} image={formData.image} />
        <div>
          <h3>Resumen</h3>
          <p>{formData.summary}</p>
        </div>
        <div>
          <h3>Paso a Paso</h3>
          <ul>
            {
              formData.steps.map(el => {
                return <Step key={el.id}><span>{formData.steps.indexOf(el) + 1}-</span>{el.value}</Step>
              })
            }
          </ul>
        </div>
      </DetailsContainer>
        
      </CreateSection>
      
    </>
  );
}
