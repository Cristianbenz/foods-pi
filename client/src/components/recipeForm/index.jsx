import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { validations } from "../../sections/recipeCreator/utils";

import DietsCheckbox from "../dietsCheckbox";

import {
  Form,
  InputImageStyle,
  Requirements,
  StepsContainer,
  TextArea,
  Button,
} from "./styles";

export default function RecipeForm({
  data,
  onChange,
  handleDiets,
  handleSteps,
  handleSubmit,
  error,
}) {
  const { name, image, healthScore, summary } = data.recipe;
  const [steps, setSteps] = useState([]);
  const [valid, setValid] = useState(false);

  function addStepInput() {
    setSteps((prevSteps) => [...prevSteps, { id: uuidv4(), value: "" }]);
  }

  function changeStep(e) {
    const fields = steps.map((stp) => {
      if (e.target.id === stp.id) {
        stp.value = e.target.value;
      }
      return stp;
    });
    handleSteps(fields);
  }

  function deleteStep(id) {
    let newArr = steps.filter((stp) => stp.id !== id);
    setSteps(newArr);
    handleSteps(newArr);
  }

  useEffect(() => {
    const errors = validations(data.recipe);
    !Object.keys(errors).length && setValid(true);
  }, [data]);

  function submit(e) {
    handleSubmit(e);
    setSteps([]);
  }

  return (
    <>
      <Form onSubmit={submit}>
        <label htmlFor="name">
          Nombre:
          <input
            type="text"
            minLength={"4"}
            name="name"
            value={name}
            onChange={onChange}
          />
          <Requirements>
            <li>
              <span>{error.nameRequired ? "❕" : "✅"}</span>
              El nombre es obligatorio.
            </li>
            <li>
              <span>{error.nameMin ? "❕" : "✅"}</span>
              Mínimo 4 caracteres.
            </li>
            <li>
              <span>{error.nameWrong ? "❕" : "✅"}</span>
              Sin caracteres especiales.
            </li>
          </Requirements>
        </label>
        <label htmlFor="image">
          Imagen:
          <InputImageStyle>
            <span>
              {!image.length ? "Selecciona un archivo" : "✅Archivo cargado"}
            </span>
            <input type={"file"} name="image" onChange={onChange} />
          </InputImageStyle>
          <div>
            <span>{!image.length ? "❕" : "✅"}</span>
            El formato debe ser jpg, jpe/g o png
          </div>
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
          Resumen:
          <TextArea name="summary" value={summary} onChange={onChange} />
          <Requirements>
            <li>
              <span>{error.summaryRequired ? "❕" : "✅"}</span>
              El resumen es obligatorio.
            </li>
            <li>
              <span>{error.summaryMin ? "❕" : "✅"}</span>
              Minimo 80 caracteres.
            </li>
            <li>
              <span>{error.summaryWrong ? "❕" : "✅"}</span>
              Sin caracteres especiales.
            </li>
          </Requirements>
        </label>
        <StepsContainer>
          <span>Pasos</span>{" "}
          <button type="button" onClick={addStepInput}>
            +
          </button>
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
                  <button type="button" onClick={() => deleteStep(el.id)}>
                    {"-"}
                  </button>
                </label>
              );
            })}
          </ul>
        </StepsContainer>
        <DietsCheckbox cb={handleDiets} />
        {valid && <Button>Crear Receta</Button>}
      </Form>
    </>
  );
}
