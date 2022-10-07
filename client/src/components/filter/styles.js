import styled from "styled-components";

export const FilterButton = styled.span`
	width: max-content;
	height: max-content;
	font-size: 22px;

	@media screen and (min-width: 800px) {
		display: none;
	}
`

export const FilterContainer = styled.aside`
	position: absolute;
	display: flex;
	transition: height 600ms, visibility 500ms, opacity 500ms;
	left: 0;
	top: 220px;
	z-index: 4;
	background-color: ${({ theme }) => theme.color.secondary};
	width: 87vw;
	visibility: ${({ active }) => active ? 'visible' : 'hidden' };
	overflow: auto;
	opacity: ${({ active }) => active ? 1 : 0 };
	height: ${({ active }) => active ? '350px' : 0 };

	@media screen and (min-width: 800px) {
		position: static;
		grid-column: 1/2;
		opacity: 1;
		visibility: visible;
		overflow: visible;
		width: 100%;
		height: 600px;
		background: none;
		padding: 120px 20px;
	}

	
`

export const FilterForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 40px;

	label {
		display: flex;
		gap: 5px;
		align-items: center;
		font-size: 19px;
	}
`