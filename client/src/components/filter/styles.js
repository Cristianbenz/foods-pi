import styled from "styled-components";

export const FilterContainer = styled.aside`
	border-radius: 10px;
	background-color: ${({ theme }) => theme.color.secondary};
	width: 400px;
	height: max-content;
	min-height: 600px;
	padding: 25px 20px;
	gap: 70px;
`

export const FilterForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;

	label {
		display: flex;
		gap: 5px;
		align-items: center;
		font-size: 19px;
	}
`