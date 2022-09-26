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
  font-size: 24px;

  h1 {
    font-size: 54px;
    font-style: italic;
    padding-bottom: 17px;
  }

	h2 {
		font-size: 30px;
    font-weight: bolder;
    font-style: italic;
    padding: 10px 0px;
	}
`;

export const ScoreNumber = styled.span`
	font-size: 24px;
`

export const RecipeImg = styled.img`
  width: 500px;
  height: auto;
  border: 8px solid ${({theme}) => theme.color.secondary};
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
  width: 90%;
  flex-direction: column;
  gap: 30px;
  padding: 25px;
  font-size: 25px;

  h2 {
    font-size: 42px;
    font-style: italic;
    border-bottom: 2px solid black;
    margin-bottom: 19px;
  }

  p {
    line-height: 50px;
  }
`;

export const StepsList = styled(DietsList)`
  gap: 16px;
  
  li{
    line-height: 50px;
    align-items: flex-start;
  }

  span{
    font-size: 20px;
    border-radius: 50%;
    padding: 2px 20px;
    background-color: ${({theme}) => theme.color.secondary};
  }
`;
