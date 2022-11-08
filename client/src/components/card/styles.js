import styled from "styled-components";

export const CardContainer = styled.article`
  position: relative;
  width: 250px;
  height: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.4);
  background-color: ${({ theme }) => theme.color.secondary};
  overflowX: hidden;

  h3 {
    font-size: 22px;
    font-weight: bolder;
    margin: 10px auto;
  }

  img{
    height: auto;
  }
`;

export const HealthScorePin = styled.span`
  position: absolute;
  right: 15px;
  top: 10px;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 10px 12px;
  border-radius: 50%;
  font-weight: bolder;
  font-size: 18px;
`;

export const InfoContainer = styled.div`
  padding: 10px 10px;
`;

export const DietsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 5px;

  li {
    padding: 5px 12px;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
