import styled, { keyframes } from "styled-components";

const rightIn = keyframes`
	from {
		transform: translateX(100%)
	}
	to{
		transform: translateX(0)
	}
`;

export const Container = styled.div`
  position: fixed;
  right: 15px;
  bottom: 10px;
`;

export const Toast = styled.div`
	position: relative;
	padding: 20px 30px;
  font-size: 18px;
  opacity: 0.9;
  transition: all 500ms;
  animation: ${rightIn} 600ms;
  margin: 10px 0;

  &:hover {
    opacity: 1;
  }

  &.success {
    background-color: green;
  }

  &.error {
    background-color: red;
  }

	p{
		text-align: center;
		font-weight: bolder;
	}
`;

export const Button = styled.button`
  position: absolute;
	top: 1px;
	right: 1px;
	border: none;
	background: none;
	padding: 0 5px;
	font-size: 22px;
	font-weight: bolder;
	cursor: pointer;
`;
