import styled from "styled-components";

export const CreateSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 25px;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 20px auto;

  > div h4 {
    font-size: 40px;

    @media screen and (min-width: 800px) {
      font-size: 50px;
    }
  }

  @media screen and (min-width: 800px){
    width: 400px;
    padding: 20px 50px;
  }
`;

export const Summary = styled.div`
  font-size: 30px;

	p {
		padding-left: 20px;
		word-break: break-all;

    @media screen and (min-width: 800px) {
      width: 700px;
    }
	}
`;

export const StepsContainer = styled.ul`
  list-style-type: none;
  
  @media screen and (min-width: 800px) {
    width: 700px;
  }
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
