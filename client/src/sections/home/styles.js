import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 1px;

  @media screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: 350px auto;
    gap: 1px;
    padding: 40px;
  }
`;
