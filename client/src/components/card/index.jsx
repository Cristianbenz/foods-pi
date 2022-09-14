import imgPredeterminada from '../../assets/imgPredeterminada.png'
import { CardContainer, InfoContainer, HealthScorePin, DietsList } from "./styles"

export default function Card({ id, name='Anonimo', image, diets=[], healthScore=0 }) {
	if(!image) image = imgPredeterminada;
	
	return (
		<CardContainer>
			<HealthScorePin>{healthScore}</HealthScorePin>
			<img src={image} alt='Foto de Receta'/>
			<InfoContainer>
				<DietsList>
					{
						diets.map(el => <li key={diets.indexOf(el) + 1}>{el}</li>)
					}
				</DietsList>
				<h3>{name}</h3>
			</InfoContainer>
		</CardContainer>
	)  
}