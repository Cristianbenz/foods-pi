import { useDispatch } from "react-redux";

import DietsCheckbox from "../dietsCheckbox";

import { addRecipe } from "../../redux/actions";

import { Form, StepsContainer, TextArea, Button } from "./styles";

export default function RecipeForm({
  data,
  onChange,
  dietsOptions,
  addSteps,
	changeStep,
  deleteStep,
  steps,
  error,
}) {
	
	const {name, image, healthScore, summary} = data.recipe
	const dispatch = useDispatch()

	function submitForm(e) {
		e.preventDefault()
		if(Object.keys(error) < 1) {
      console.log(data)
			dispatch(addRecipe(data))
		}
	}

  return (
    <>
      <Form onSubmit={submitForm}>
        <span>*Campos obligatorios</span>
        <label htmlFor="name">
          Nombre*:
          <input
            type="text"
            minLength={"4"}
            name="name"
            value={name}
            onChange={onChange}
          />
        </label>
        <label htmlFor="image">
          Imagen:
          <input
            type="text"
            name="image"
            value={image}
            onChange={onChange}
          />
        </label>
        <label htmlFor="healthScore">
          Puntos de Saludable:
          <input
            type="number"
            min="1"
            max="100"
            name="healthScore"
            value={healthScore}
            onChange={onChange}
          />
        </label>
        <label htmlFor="summary">
          Resumen*:
          <TextArea name="summary" value={summary} onChange={onChange} />
        </label>
        <StepsContainer>
          <span>Pasos</span> <button type="button" onClick={addSteps}>+</button>
          <ul>
            {steps.map((el) => {
              return (
                <label key={el.id}>
                  <input
                    type="text"
                    id={el.id}
                    value={el.value}
                    onChange={changeStep}
                  />
                  <button type='button' onClick={() => deleteStep(el.id)}>{"-"}</button>
                </label>
              );
            })}
          </ul>
        </StepsContainer>
        <DietsCheckbox cb={dietsOptions} />
        {Object.keys(error) < 1 && <Button>Crear Receta</Button>}
      </Form>
    </>
  );
}
