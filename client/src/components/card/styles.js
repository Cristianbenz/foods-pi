import styled from "styled-components";

export const CardContainer = styled.article`
  position: relative;
  width: 300px;
  min-height: 400px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.fontColor};
  overflow: hidden;

  h3 {
    font-size: 30px;
    font-weight: bolder;
    margin: 10px auto;
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
  font-size: 20px;
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
    border-radius: 10px;
    padding: 5px 12px;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
