import styled from "styled-components";

export const Form = styled.form`
  width: 90vw;
  font-size: 17px;
  display: flex;
  gap: 17px;
  padding: 25px 30px;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.secondary};

  & > label {
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-size: 17px;
    font-weight: bolder;

    & > input {
      height: 30px;
      background: none;
      border: none;
      border-left: 1px solid black;
      border-bottom: 1px solid black;
      padding: 5px;
      font-size: 17px;

      @media screen and (min-width: 800px) {
        font-size: 20px;
      }
    }

    @media screen and (min-width: 800px) {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 800px) {
    font-size: 20px;
    width: 500px;
  }
`;

export const Requirements = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 2px;
`;

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.color.primary};
  height: 60px;
  padding: 10px;
  font-size: 17px;

  @media screen and (min-width: 800px) {
    font-size: 20px;
  }
`;

export const RequiredMsg = styled.span`
  display: block;
`;

export const StepsContainer = styled.div`
  span {
    font-weight: bolder;
  }

  ul {
    display: flex;
    padding: 10px 0;
    gap: 10px;
    flex-direction: column;

    input {
      height: 30px;
      background-color: ${({ theme }) => theme.color.primary};
      border: none;
      padding: 5px;
      font-size: 17px;

      @media screen and (min-width: 800px) {
        font-size: 20px;
        width: 86%;
        width: 400px;
      }
    }
  }

  button {
    display: inline-block;
    padding: 0px 4px;
    font-size: 18px;
    margin: 0 8px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 90%;
  margin: auto;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  font-size: 22px;
  font-weight: bolder;
  border: 3px solid ${({ theme }) => theme.color.fontColor};
`;
