import { useEffect } from "react"
import { useSelector } from "react-redux"
import { pagination } from "../../redux/actions"

export default function Pagination() {
	const [pag, setPag] = useEffect(0)
	const recipesArr = useSelector(state => state.recipes)

	return(
		<div>
			<span></span>
				<ul>
					{

					}
				</ul>
			<span></span>
		</div>
	)
}