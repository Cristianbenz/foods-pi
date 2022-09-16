import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import { getDetails } from "../../redux/actions";

import { FirstSection, RecipeImg, ScoreNumber, DietsList, SecondSection, StepsList } from './styles'

export default function RecipeDetails() {
	const { recipeId } = useParams()
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(recipeId));
  }, [dispatch, recipeId]);

  const { name, img, healthScore, diets, summary, steps } = details
  return (
    details && (
      <>
        <FirstSection>
          <RecipeImg src={img} alt="Foto de la receta" />
          <article>
            <h1>{name}</h1>
            <h2>HealthScore: <ScoreNumber>{healthScore}</ScoreNumber></h2>
            <h2>Tipo de dieta</h2>
            <DietsList>
              {
                diets?.map(el => {
                  return <li key={el.id}>{el.name}</li>
                })
              }
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
              {steps?.map(el => {
                return <li>{el}</li>
              })}
            </StepsList>
          </div>
        </SecondSection>
      </>
    )
  );
}