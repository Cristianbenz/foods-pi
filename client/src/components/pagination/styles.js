import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 30px 20px;
  font-size: 24px;

  p, i {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const NumBox = styled.input`
  border-radius: 5px;
  width: 30px;
  border: 1px solid black;
  padding: 6px;
  text-align: center;
`;

export const Arrow = styled.i`
  cursor: ${({ disabled }) => !disabled ? 'pointer' : 'not-allowed'};
  opacity: ${({ disabled }) => !disabled ? 1 : 0.5}
`