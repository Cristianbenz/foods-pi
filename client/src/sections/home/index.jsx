import CardsList from "../../components/cardsList"
import Filter from "../../components/filter"

export default function Home() {
	return (
		<>
			<h1 className="title">Recetas</h1>
			<div>
				<Filter />
				<CardsList />
			</div>
		</>
	)
}