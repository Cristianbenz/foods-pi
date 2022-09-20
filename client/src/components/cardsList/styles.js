import styled from "styled-components";

export const Cardscontainer = styled.section`
	width: 95%;
	margin: auto;
	display: grid;
	grid-template-columns: repeat( auto-fill, minmax(350px, 1fr) );
	justify-items: center;
	row-gap: 60px;
	padding: 20px 0px;

	a{
		text-decoration: none;
	}
`