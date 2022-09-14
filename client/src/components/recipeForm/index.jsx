import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DietsCheckbox from "../dietsCheckbox";

import { Form, StepsContainer, TextArea, Button } from "./styles";

export default function RecipeForm({ data, onChange, stepsChange, error }) {
	const [steps, setStep] = useState([])

  function addSteps() {
		setStep(prevSteps => [...prevSteps, {id: uuidv4(), value: ''}])
	}

	function changeStep(e) {
		const fields = steps.map(stp => {
      if(e.target.id === stp.id) {
        stp.value = e.target.value
      }
      return stp;
    })
    
    stepsChange(fields);
	}

	function deleteStep(id) {
		let newArr = steps.filter(stp => stp.id !== id)
		setStep(newArr)
		stepsChange(newArr)
	}

	return (
		<>
			<Form>
			<span>*Campos obligatorios</span>
				<label htmlFor="name">
					Nombre*:
					<input type='text' minLength={'4'} name='name' value={data.name} onChange={onChange} />
				</label>
				<label htmlFor="image">
					Imagen:
					<input type='text' name='image' value={data.image} onChange={onChange} />
				</label>
				<label htmlFor="healthScore">
					Puntos de Saludable:
					<input type='number' min='1' max='100' name='healthScore' value={data.healthScore} onChange={onChange} />
				</label>
				<label htmlFor="summary">
					Resumen*:
					<TextArea name='summary' value={data.summary} onChange={onChange} />
				</label>
				<StepsContainer>
					<span>Pasos</span> <button onClick={addSteps}>+</button>
					<ul>
						{
							steps.map(el => {
								return <label key={el.id}>
													<input  type='text' id={el.id} value={el.value} onChange={changeStep} />
													<button onClick={() => deleteStep(el.id)}>{'-'}</button>
											</label>
							}  )
						}
					</ul>
				</StepsContainer>
				<DietsCheckbox />
				{Object.keys(error) < 1 && <Button>Crear Receta</Button>}
			</Form>
		</>
  );
}
