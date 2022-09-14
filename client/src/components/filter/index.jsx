import DietsCheckbox from '../dietsCheckbox'
import { FilterContainer, FilterForm } from "./styles";

export default function Filter() {

  return (
    <FilterContainer>
      <FilterForm>
        <label>
          Ordenar por:
          <select>
            <option value="az">Alfabetico A - Z</option>
            <option value="za">Alfabetico Z - A</option>
            <option value="hasc">HealthScore Asc </option>
            <option value="hdesc">HealthScore Desc</option>
          </select>
        </label>
        <DietsCheckbox />
      </FilterForm>
    </FilterContainer>
  );
}
