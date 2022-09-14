import styled from "styled-components";

export const Input = styled.input`
	height: 30px;
	width: 90px;
	border-color: ${({theme}) => theme.color.fontColor};
	border-radius: 10px;
	transition: all 500ms ease-in-out;
	transform-origin: left;
	padding: 10px;
	font-size: 18px;

	&:focus {
		width: 260px;
		transform: scaleY(1.2);
		font-size: 22px;
	}
`