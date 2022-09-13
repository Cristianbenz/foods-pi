import Wave from "./wave";
import plate from '../../assets/plato.png'
import {
  HeaderContainer,
  LeftContainer,
  HeaderTitle,
  CtaContainer,
  StyledCta,
  HeaderTable,
  Plate,
  // Ingredients
} from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <HeaderTitle>Henry Foods</HeaderTitle>
        <CtaContainer to="/home">
          <StyledCta>¡Mira las Recetas!</StyledCta>
        </CtaContainer>
        <Wave />
      </LeftContainer>
      <HeaderTable>
        <Plate src={plate} alt="" />
        {/* <Ingredients src={ingredientes} alt="" /> */}
      </HeaderTable>
    </HeaderContainer>
  );
}
