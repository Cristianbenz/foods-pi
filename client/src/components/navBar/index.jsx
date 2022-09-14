import { Link, useLocation } from "react-router-dom";

import SearchInput from "../searchInput";

import { Header, Menu } from "./styles";

export default function NavBar() {
  const { pathname } = useLocation()

  if(pathname === '/') return null
  return (
    <Header>
      <Link to='/home'>
        <img src={"logo"} alt="Logo" />
      </Link>
      <SearchInput />
      <nav>
        <Menu>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='recipeCreator'>Crear Receta</Link></li>
        </Menu>
      </nav>
    </Header>
  );
}
