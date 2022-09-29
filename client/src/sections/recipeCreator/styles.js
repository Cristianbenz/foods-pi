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

  > div ul {
    list-style-type: none;
  }
`;

export const Summary = styled.div`
  font-size: 30px;

	p {
		padding-left: 20px;
		word-break: break-all;
	}
`;

export const Step = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 30px;
  padding-left: 20px;

  span {
    word-break: normal;
  }
`;
