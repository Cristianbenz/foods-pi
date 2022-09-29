import styled from "styled-components";

export const CreateSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 25px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px 50px;

  > div h4 {
    font-size: 50px;
  }
`;

export const Summary = styled.div`
  font-size: 30px;

	p {
    width: 700px;
		padding-left: 20px;
		word-break: break-all;
	}
`;

export const StepsContainer = styled.ul`
  list-style-type: none;
  width: 700px;
`

export const Step = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 30px;
  padding-left: 20px;
  word-break: break-all;

  span {
    word-break: normal;
  }
`;
