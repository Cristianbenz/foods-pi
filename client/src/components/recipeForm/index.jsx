import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { validations } from "../../sections/recipeCreator/utils";

import DietsCheckbox from "../dietsCheckbox";

import {
  Form,
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
  const [selectedDiets, setSelectedDiets] = useState( new Array(12).fill(false) );

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
    setSelectedDiets(new Array(12).fill(false))
  }

  return (
    <>
      <Form onSubmit={submit} autoComplete='off'>
        <label htmlFor="name">
          Name:
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
              The name is required.
            </li>
            <li>
              <span>{error.nameMin ? "❕" : "✅"}</span>
              At least 4 characters .
            </li>
            <li>
              <span>{error.nameWrong ? "❕" : "✅"}</span>
              Not include special characters.
            </li>
          </Requirements>
        </label>
        <label htmlFor="image">
          Url of the image:
          <input name='image' type="text" value={image} onChange={onChange} />
          {image.length  
            ? <div>
                <span>{error.imageWrong ? "❕" : "✅"}</span>
                Url of the image jpg o jpe/g
              </div>
            : null}
        </label>
        <label htmlFor="healthScore">
          HealthScore:
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
          Summary:
          <TextArea name="summary" value={summary} onChange={onChange} />
          <Requirements>
            <li>
              <span>{error.summaryRequired ? "❕" : "✅"}</span>
              The summary is required.
            </li>
            <li>
              <span>{error.summaryMin ? "❕" : "✅"}</span>
              At least 80 characters .
            </li>
            <li>
              <span>{error.summaryWrong ? "❕" : "✅"}</span>
              Not include special characters.
            </li>
          </Requirements>
        </label>
        <StepsContainer>
          <span>Steps</span>{" "}
          <button type="button" onClick={addStepInput}>+</button>
          <ul>
            {steps.map((el) => {
              return (
                <label key={el.id}>
                  <input
                    autoFocus={true}
                    type="text"
                    id={el.id}
                    value={el.value}
                    onChange={changeStep}
                  />
                  <button type="button" onClick={() => deleteStep(el.id)}>-</button>
                </label>
              );
            })}
          </ul>
        </StepsContainer>
        <DietsCheckbox cb={handleDiets} control={selectedDiets} updateControl={setSelectedDiets} />
        {valid && <Button>Create Recipe</Button>}
      </Form>
    </>
  );
}
