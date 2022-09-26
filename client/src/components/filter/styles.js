import styled from "styled-components";

export const FilterContainer = styled.aside`
	width: 100%;
	height: max-content;
	min-height: 600px;
	padding: 25px 20px;
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