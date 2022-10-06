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
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 30px;
  font-size: 18px;

  h1 {
    font-size: 40px;
    font-style: italic;
    padding-bottom: 17px;

    @media screen and (min-width: 800px) {
      font-size: 54px;
    }
  }

	h2 {
		font-size: 25px;
    font-weight: bolder;
    font-style: italic;
    padding: 10px 0px;

    @media screen and (min-width: 800px) {
      font-size: 30px;
    }
	}

  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    font-size: 24px;
  }
`;

export const ScoreNumber = styled.span`
	font-size: 18px;

  @media screen and (min-width: 800px) {
    font-size: 24px;
  }
`

export const RecipeImg = styled.img`
  width: 300px;
  height: auto;
  border: 8px solid ${({theme}) => theme.color.secondary};

  @media screen and (min-width: 800px) {
    width: 500px;
  }
`;

export const DietsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  padding-top: 6px;
  padding-left: 18px;

	li{
		display: flex;
		align-items: center;
		gap: 8px;
	}

  @media screen and (min-width: 800px) {
    padding-top: 18px;
  }
`;

export const SecondSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  padding: 25px;
  font-size: 18px;

  h2 {
    font-size: 36px;
    font-style: italic;
    border-bottom: 2px solid black;
    margin-bottom: 19px;

    @media screen and (min-width: 800px) {
      font-size: 42px;
    }
  }

  p {
    line-height: 42px;

    @media screen and (min-width: 800px) {
      line-height: 50px;
    }
  }

  @media screen and (min-width: 800px) {
    width: 90%;
    font-size: 25px;
  }
`;

export const StepsList = styled(DietsList)`
  gap: 16px;
  padding-left: 0px;
  
  li{
    line-height: 42px;
    align-items: flex-start;

    @media screen and (min-width: 800px) {
      line-height: 50px;
    }
  }

  span{
    font-size: 20px;
    border-radius: 50%;
    padding: 0px 18px;
    background-color: ${({theme}) => theme.color.secondary};

    @media screen and (min-width: 800px) {
      padding: 2px 20px;
    }
  }
`;
