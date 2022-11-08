import styled from "styled-components";

export const Cardscontainer = styled.section`
	width: 100%;
	margin: auto;
	display: grid;
	grid-template-columns: repeat( auto-fill, minmax(252px, 1fr) );
	justify-items: center;
	row-gap: 60px;
	padding: 20px 0px;
	
	a{
		text-decoration: none;
	}
`

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 28px;

  @media screen and (min-width: 800px) {
	 font-size: 42px;
  }

`