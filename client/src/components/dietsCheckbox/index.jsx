import { CheckBoxContainer } from './styles'

export default function DietsCheckbox() {
	const dietas = [
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
    "Low FODMAP",
    "Whole30",
  ];
	
  return (
    <CheckBoxContainer>
      <span>Tipo de dieta</span>
      {dietas.map((el) => (
        <label key={dietas.indexOf(el)} htmlFor={el}>
          <input type="checkbox" name={el} id={el} value={el} />
          {el}
        </label>
      ))}
    </CheckBoxContainer>
  );
}
