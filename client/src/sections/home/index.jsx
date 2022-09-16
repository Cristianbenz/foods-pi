import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from "../../redux/actions"

import CardsList from "../../components/cardsList"
import Filter from "../../components/filter"

import { BodyContainer } from './styles'

export default function Home() {
	const dispatch = useDispatch()
	const list = useSelector(state => state.recipes)
	useEffect(() => {
		dispatch(getRecipes())
	}, [dispatch])

	return (
		<>
			<h1 className="title">Recetas</h1>
			<BodyContainer>
				<Filter />
				<CardsList list={list} />
			</BodyContainer>
		</>
	)
}