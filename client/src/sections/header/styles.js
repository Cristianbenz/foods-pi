import styled from "styled-components";
import { Link } from "react-router-dom";
import table from "../../assets/table.jpg";

export const HeaderContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

export const LeftContainer = styled.div`
  position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
  width: auto;
  height: 100vh;
`;

export const HeaderTitle = styled.h1`
  font-size: 250px;
  font-weight: bolder;
  text-align: center;
`;

export const CtaContainer = styled(Link)`
	position: relative;
	z-index: 4;
`

export const StyledCta = styled.button`
  background: none;
  padding: 15px 30px;
  border: 2px solid ${({ theme }) => theme.color.fontColor};
  font-size: 42px;
  cursor: pointer;
`;

export const HeaderTable = styled.div`
  position: relative;
  background-image: url(${table});
  width: 60vw;
  height: 100vh;
`;


export const Plate = styled.img`
  position: absolute;
  filter: drop-shadow(-10px 10px 10px rgba(0, 0, 0, .35));
  z-index: 1;
  left: -100px;
  bottom: -130px;
  width: 650px;
`

// export const Ingredients = styled.img`
//   position: absolute;
//   top: -200px;
//   right: -200px;
//   transform: rotate(20deg);
//   filter: drop-shadow(-10px 10px 10px rgba(0, 0, 0, .35));
// `