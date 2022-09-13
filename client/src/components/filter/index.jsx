export default function Filter() {
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
    <aside>
      <form>
        <select>
          <option value="az">Alfabetico A - Z</option>
          <option value="za">Alfabetico Z - A</option>
          <option value="hasc">HealthScore Asc </option>
          <option value="hdesc">HealthScore Desc</option>
        </select>
        <div>
          {dietas.map((el) => (
            <label key={dietas.indexOf(el)} htmlFor={el}>
              <input type="checkbox" name={el} value={el} />
							{el}
            </label>
          ))}
        </div>
      </form>
    </aside>
  );
}
