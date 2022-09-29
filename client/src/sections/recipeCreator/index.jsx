import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addRecipe } from "../../redux/actions";
import { formSchema, validations } from "./utils";

import RecipeForm from "../../components/recipeForm";
import Card from "../../components/card";
import ToastContainer, { toast } from '../../components/notifications';

import { CreateSection, DetailsContainer, Summary, Step } from "./styles";

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
      try {
        dispatch(addRecipe(formData))
        setFormData({...formSchema})
        toast('success', 'Receta creada correctamente', notifications, setNotifications)
      } catch (error) {
          toast('error', 'Ya existe esta receta', notifications, setNotifications)
      }
		} else {
      toast('error', 'No se cumplen los requisitos', notifications, setNotifications)
    }
	}

  return (
    <div className="background formBackground">
      <div>
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
              diets={formData.diets}
            />
            <Summary>
              <h4>Resumen</h4>
              <p>{formData.recipe.summary}</p>
            </Summary>
            <div>
              <h4>Paso a Paso</h4>
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
      </div>
    </div>
  );
}
