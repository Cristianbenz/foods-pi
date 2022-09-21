import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 30px 20px;
  font-size: 20px;
  
  span {
    cursor: pointer;
  }
`;

export const NumsList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 15px;
`;

export const Num = styled.li`
  color: ${({active}) => active && 'red'};
  font-weight: ${({active}) => active && 'bolder'};
  cursor: pointer;
`