import styled from "styled-components";

export const Form = styled.form`
  font-size: 20px;
  display: flex;
  gap: 17px;
  padding: 25px 30px;
  flex-direction: column;
  width: 500px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.secondary};

  & > label {
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-size: 20px;
    font-weight: bolder;

    & > input {
      height: 30px;
      background: none;
      border: none;
      border-left: 1px solid black;
      border-bottom: 1px solid black;
      padding: 5px;
      font-size: 20px;
    }
  }
`;

export const InputImageStyle = styled.div`
  position: relative;
  width: 120px;
  height: max-content;
  padding: 5px 0;
  cursor: pointer;

  input {
    opacity: 0;
    width: max-content;
    height: 100%;
}

  span{
    position: absolute;
    border-radius: 8px;
    padding: 6px 9px;
    background-color: ${({theme}) => theme.color.primary};
    z-index: 0;
    width: max-content;
    height: max-content;
    top: 1px;
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
  font-size: 20px;
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
      width: 400px;
      background-color: ${({ theme }) => theme.color.primary};
      border: none;
      padding: 5px;
      font-size: 20px;
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
