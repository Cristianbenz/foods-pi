import CardsList from "../../components/cardsList"
import Filter from "../../components/filter"

import { BodyContainer } from './styles'

export default function Home() {
	return (
		<>
			<h1 className="title">Recetas</h1>
			<BodyContainer>
				<Filter />
				<CardsList />
			</BodyContainer>
		</>
	)
}