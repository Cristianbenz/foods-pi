import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    width: 400px;
    height: auto;
  }
`

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
  border-radius: 20px;
  border: 5px dashed black;
`;

export const DietsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  padding-top: 18px;
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

export const StepsList = styled(DietsList)`
  gap: 16px;
  span{
    border-radius: 50%;
    padding: 8px 19px;
    background-color: pink;
  }
`;
