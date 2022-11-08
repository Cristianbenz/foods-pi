import imgPredeterminada from "../../assets/imgPredeterminada.png";
import {
  CardContainer,
  InfoContainer,
  HealthScorePin,
  DietsList,
} from "./styles";

export default function Card({ name, image, diets, healthScore = 1 }) {
  if (!image) image = imgPredeterminada;
  if (!name) name = "Indefinido";
  return (
    <CardContainer>
      <HealthScorePin>{healthScore}</HealthScorePin>
      <img src={image} alt="Foto de Receta" />
      <InfoContainer>
        <DietsList>
          {diets?.slice(0, 6).map((el) => (
            <li key={diets.indexOf(el) + 1}>{el.toLowerCase()}</li>
          ))}
          {Boolean(diets?.at(7)) && <li>...</li>}
        </DietsList>
        <h3>{name}</h3>
      </InfoContainer>
    </CardContainer>
  );
}
