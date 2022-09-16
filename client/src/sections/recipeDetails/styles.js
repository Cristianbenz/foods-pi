import styled from "styled-components";

export const FirstSection = styled.section`
  display: flex;
  gap: 40px;
  padding: 30px;
  font-size: 27px;

  h1 {
    font-size: 65px;
  }

	h2 {
		font-size: 34px;
		font-weight: bolder;
	}
`;

export const ScoreNumber = styled.span`
	font-size: 27px;
`

export const RecipeImg = styled.img`
  width: 500px;
`;

export const DietsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  padding-left: 18px;

	li{
		display: flex;
		align-items: center;
		gap: 8px;
	}
`;

export const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 25px;
  font-size: 25px;

  h2 {
    font-size: 42px;
  }
`;

export const StepsList = styled(DietsList)``;
