import styled from "styled-components";

export const Header = styled.header`
	position: sticky;
	top: 0px;
	z-index: 999;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 9px 40px;
	background-color: ${({theme}) => theme.color.secondary};
`

export const Logo = styled.img`
	width: 150px;
	height: auto;
`

export const Menu = styled.ul`
	display: flex;
	list-style-type: none;
	gap: 30px;
	
	a {
		text-decoration: none;
		font-weight: bolder;
		font-size: 20px;
	}

	li {
		width: max-content;
	}
`