import styled from "styled-components";
import { Link } from "react-router-dom";
import table from "../../assets/table.jpg";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const LeftContainer = styled.div`
  height: 60vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;

  @media screen and (min-width: 800px) {
   height: 100vh;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 64px;
  padding: 50px 0;
  text-align: center;


  @media screen and (min-width: 800px) {
    font-size: 200px;
    font-weight: bolder;
  }
`;

export const CtaContainer = styled(Link)`
  position: relative;
  z-index: 4;
`;

export const StyledCta = styled.button`
  font-size: 20px;

  background: none;
  padding: 15px 30px;
  border: 2px solid ${({ theme }) => theme.color.fontColor};
  cursor: pointer;
  
  @media screen and (min-width: 800px){
    font-size: 42px;
  }
`;

export const HeaderTable = styled.div`
  position: relative;
  background-image: url(${table});
  width: 100vw;
  height: 40vh;

  @media screen and (min-width: 800px) {
    width: 60vw;
    height: 100vh;
  }
`;

export const Plate = styled.img`
  position: absolute;
  z-index: 1;
  width: 300px;
  top: -150px;
  right: -20px;
  filter: drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.35));

  @media screen and (min-width: 800px) {
    width: 650px;
    top: auto;
    left: -100px;
    bottom: -130px;
  }
`;
