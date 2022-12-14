import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from '../../assets/logo.png'

import SearchInput from "../searchInput";

import { Header, Menu, Logo, MenuButton, Container } from "./styles";

export default function NavBar() {
  const [ show, setShow ] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setShow(false)
  }, [pathname])

  if(pathname === '/') return null
  return (
    <Header>
      <Container>
        <Link to='/home'>
          <Logo src={logo} alt="Logo" />
        </Link>
        <SearchInput />
        <nav>
          <MenuButton open={show} onClick={() => setShow(prev => !prev)}>
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
          <Menu open={show}>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/recipeCreator'>Create Recipe</Link></li>
          </Menu>
        </nav>
      </Container>
    </Header>
  );
}
