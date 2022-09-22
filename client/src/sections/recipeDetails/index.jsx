import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getDetails, clearDetails } from "../../redux/actions";
import imgPredeterminada from "../../assets/imgPredeterminada.png";

import {
  FirstSection,
  RecipeImg,
  ScoreNumber,
  DietsList,
  SecondSection,
  StepsList,
} from "./styles";

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const details = useSelector((state) => state.details);
  const loading = useSelector((state) => state.searching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(recipeId));

    return () => {
      dispatch(clearDetails);
    }
  }, [dispatch, recipeId]);

  const { name, image, healthScore, diets, summary, steps } = details;
  return loading ? (
    <div>
      <h1>CARGANDO...</h1>
    </div>
  ) : (
    <>
      {!Object.keys(details).length ? (
        <div>
          <h1>No existe esta receta</h1>
        </div>
      ) : (
        <>
          <FirstSection>
            <RecipeImg src={image || imgPredeterminada} alt="Foto de la receta" />
            <article>
              <h1>{name}</h1>
              <h2>HealthScore: <ScoreNumber>{healthScore}</ScoreNumber></h2>
              <h2>Tipo de dieta:</h2>
              <DietsList>
                {diets?.map((el) => {
                  return <li key={diets.indexOf(el)}>{el.name || el}</li>;
                })}
              </DietsList>
            </article>
          </FirstSection>
          <SecondSection>
            <div>
              <h2>Resumen</h2>
              <p>{summary}</p>
            </div>
            <div>
              <h2>Paso a paso</h2>
              <StepsList>
                {steps?.map((el) => {
                  return (
                    <li key={steps.indexOf(el)}>
                      <span>{steps.indexOf(el) + 1}</span>
                      {el.value || el}
                    </li>
                  );
                })}
              </StepsList>
            </div>
          </SecondSection>
        </>
      )}
    </>
  );
}
