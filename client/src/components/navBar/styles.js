import styled from "styled-components";

export const Header = styled.header`
	position: sticky;
	top: 0px;
	z-index: 999;
	background-color: ${({theme}) => theme.color.secondary};
	
`

export const Container = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 9px 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Logo = styled.img`
	width: 110px;
	height: auto;

	@media screen and (min-width: 800px) {
		width: 150px;
	}
`

export const MenuButton = styled.button`
	background: transparent;
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 30px;
	height: 20px;

	span{
		background-color: ${({ theme }) => theme.color.fontColor};
		width: 90%;
		height: 4px;
		transition: all 300ms;
    	transform-origin: left;
	}

	& span:first-child {
		transform: rotate(${({ open }) => !open? '0deg' : '37deg'});
	}

	& span:nth-child(2) {
		opacity: ${({ open }) => !open? 1 : 0};
	}

	& span:last-child {
		transform: rotate(${({ open }) => !open? '0deg' : '-37deg'});
	}

	@media screen and (min-width: 800px) {
		display: none;
	}
`

export const Menu = styled.ul`
	position: absolute;
	width: 100%;
	padding: 10px 0 8px 10px;
	right: 0px;
	bottom: -30px;
	background-color: ${({ theme }) => theme.color.secondary};
	display: flex;
	justify-content: center;
	list-style-type: none;
	gap: 30px;
	overflow: hidden;
	height: ${({ open }) => open ? 'auto' : 0};
	visibility: ${({ open }) => open ? 'visible' : 'hidden'};
	
	a {
		text-decoration: none;
		font-weight: bolder;
		font-size: 20px;
	}

	li {
		width: max-content;
	}

	@media screen and (min-width: 800px) {
		position: static;
		visibility: visible;
		height: max-content;
		overflow: visible;
	}
`