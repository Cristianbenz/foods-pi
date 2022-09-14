import styled from "styled-components";

export const Header = styled.header`
	position: sticky;
	top: 1px;
	z-index: 999;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;
	backdrop-filter: blur(2px);
	background-color: #f8a8904c
`

export const Menu = styled.ul`
	display: flex;
	list-style-type: none;
	gap: 30px;
	
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.color.fontColor};
		font-weight: bolder;
		font-size: 20px;
	}

	li {
		width: max-content;
	}
`