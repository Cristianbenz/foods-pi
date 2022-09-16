import { useState, useEffect } from "react"

export default function Pagination({totalPages=1, handle}) {
	const [pags, setPags] = useState([])
	const [currentPage, setCurrentPage] = useState(1)


	for (let i = 1; i <= totalPages; i++) {
		setPags(prevPags => [...prevPags, i])
	}

	useEffect(() => {
		handle(currentPage)
	}, [currentPage, handle])

	return(
		<div>
			<span></span>
				<ul>
					{
						pags.map(num => {
							return <li onClick={() => setCurrentPage(num)} key={num}>num</li>
						})
					}
				</ul>
			<span></span>
		</div>
	)
}