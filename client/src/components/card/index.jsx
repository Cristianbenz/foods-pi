import { CardContainer, InfoContainer, CardTitle, HealthScorePin, DietsList, DietItem } from "./styles"

export default function Card({ id, name, image, diets, healthScore }) {
	return (
		<CardContainer>
			<HealthScorePin>{healthScore}</HealthScorePin>
			<img src={image} alt='Foto de Receta'/>
			<InfoContainer>
				<DietsList>
					{
						diets.map(el => <DietItem key={diets.indexOf(el) + 1}>{el}</DietItem>)
					}
				</DietsList>
				<CardTitle>{name}</CardTitle>
			</InfoContainer>
		</CardContainer>
	)  
}