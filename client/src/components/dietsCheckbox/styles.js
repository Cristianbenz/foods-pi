import styled from "styled-components";

export const CheckBoxContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, .5fr);
	row-gap: 20px;
	column-gap: 10px;

	label {
		cursor: pointer;
		display: flex;
		gap: 7px;
		font-size: 18px;
	}

	span {
		grid-column: 1/3;
		text-align: center;
		font-weight: bolder;
		font-size: 28px;
	}

`