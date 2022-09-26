import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addRecipe } from "../../redux/actions";
import { formSchema, validations } from "./utils";

import RecipeForm from "../../components/recipeForm";
import Card from "../../components/card";
import ToastContainer, { toast } from '../../components/notifications';

import { CreateSection, DetailsContainer, Step } from "./styles";

export default function RecipeCreator() {
  const [formData, setFormData] = useState({...formSchema});
  const [error, setError] = useState({});
  const [notifications, setNotifications] = useState([])
  const dispatch = useDispatch()

  function onChange(e) {
    const target = e.target;
    const name = target.name;
    let value = target.value;

    if(name === 'healthScore') {
      if(value < 0) value = 0
      else if(value > 100) value = 100
    }

    if(name === 'image') {
      const file = target.files[0];
      if(!/([^\\s]+(\.png|jpeg|jpe))/.test(file.name)) {
        return setError(prev => ({...prev, imageWrong: true }))
      }
      const path = URL.createObjectURL(file);
      value = path
    }

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
    const errors = validations(formData.recipe);
    setError(errors)
  }, [formData])

  function handleDiets(values) {
    setFormData((prevData) => {
      return {
        ...prevData,
        diets: values,
      };
    });
  }

  function handleSteps(steps) {
    setFormData((prevInfo) => {
      return {
        ...prevInfo,
        recipe: {
          ...prevInfo.recipe,
          steps: steps
        }
      };
    });
  }

  function handleSubmit(e) {
		e.preventDefault()
		if(Object.keys(error) < 1) {
			dispatch(addRecipe(formData))
      setFormData({...formSchema})
      toast('success', 'Receta creada correctamente', notifications, setNotifications)
		} else {
      toast('error', 'No se cumplen los requisitos', notifications, setNotifications)
    }
	}

  return (
    <>
      <ToastContainer notifications={notifications} setNotifications={setNotifications} />
      <h1 className="title">¡Añade tu propia receta!</h1>
      <CreateSection>
        <RecipeForm
          data={formData}
          onChange={onChange}
          error={error}
          handleDiets={handleDiets}
          handleSteps={handleSteps}
          handleSubmit={handleSubmit}
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
