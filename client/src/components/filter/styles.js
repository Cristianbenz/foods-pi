import styled from "styled-components";

export const FilterContainer = styled.aside`
	border-radius: 10px;
	background-color: ${({ theme }) => theme.color.secondary};
	width: 345px;
	min-height: 600px;
	padding: 25px 23px;
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