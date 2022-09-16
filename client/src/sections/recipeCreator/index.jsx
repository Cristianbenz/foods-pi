import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import RecipeForm from "../../components/recipeForm";
import Card from "../../components/card";

import { CreateSection, DetailsContainer, Step } from "./styles";

export default function RecipeCreator() {
  const [formData, setFormData] = useState({
    recipe: {
      name: "",
      image: "",
      healthScore: 1,
      summary: "",
      steps: [],
    },
    diets: [],
  });
  const [steps, setStep] = useState([]);
  const [error, setError] = useState({});

  function onChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setFormData((prevData) => {
      return {
        ...prevData,
        recipe: {
          ...prevData.recipe,
          [name]: value
        }
      };
    });
  }

  useEffect(() => {
    setError(validations(formData.recipe));
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

  function dietsOptions(values) {
    setFormData((prevData) => {
      return {
        ...prevData,
        diets: values,
      };
    });
  }

  function addSteps() {
    setStep((prevSteps) => [...prevSteps, { id: uuidv4(), value: "" }]);
  }

  function changeStep(e) {
    const fields = steps.map((stp) => {
      if (e.target.id === stp.id) {
        stp.value = e.target.value;
      }
      return stp;
    });

    setFormData((prevInfo) => {
      return {
        ...prevInfo,
        recipe: {
          ...prevInfo.recipe,
          steps: fields
        }
      };
    });
  }

  function deleteStep(id) {
    let newArr = steps.filter((stp) => stp.id !== id);
    setStep(newArr);
    setFormData((prevInfo) => {
      return {
        ...prevInfo,
        recipe: {
          ...prevInfo.recipe,
          steps: newArr
        }
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
          dietsOptions={dietsOptions}
          addSteps={addSteps}
          changeStep={changeStep}
          deleteStep={deleteStep}
          steps={steps}
        />
        <DetailsContainer>
          <Card
            name={formData.recipe.name}
            image={formData.recipe.image}
            healthScore={formData.recipe.healthScore}
          />
          <div>
            <h3>Resumen</h3>
            <p>{formData.recipe.summary}</p>
          </div>
          <div>
            <h3>Paso a Paso</h3>
            <ul>
              {formData.recipe.steps.map((el) => {
                return (
                  <Step key={el.id}>
                    <span>{formData.recipe.steps.indexOf(el) + 1}-</span>
                    {el.value}
                  </Step>
                );
              })}
            </ul>
          </div>
        </DetailsContainer>
      </CreateSection>
    </>
  );
}
