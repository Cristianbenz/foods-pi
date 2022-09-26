import styled from "styled-components";

export const CardContainer = styled.article`
  position: relative;
  width: 320px;
  height: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.4);
  background-color: ${({ theme }) => theme.color.secondary};
  overflow: hidden;

  h3 {
    font-size: 30px;
    font-weight: bolder;
    margin: 10px auto;
  }

  img{
    height: 260px;
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
    padding: 5px 12px;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
