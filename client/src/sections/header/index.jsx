import Wave from "./wave";
import plate from '../../assets/plato.png'
import {
  HeaderContainer,
  LeftContainer,
  HeaderTitle,
  CtaContainer,
  StyledCta,
  HeaderTable,
  Plate
} from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <HeaderTitle>Linguini's Recipes</HeaderTitle>
        <CtaContainer to="/home">
          <StyledCta>Look the recipes!</StyledCta>
        </CtaContainer>
        <Wave />
      </LeftContainer>
      <HeaderTable>
        <Plate src={plate} alt="" />
      </HeaderTable>
    </HeaderContainer>
  );
}
