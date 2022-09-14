import { useLocation } from "react-router-dom";

import { Input } from "./styles";

export default function SearchInput() {
  const { pathname } = useLocation();

  if (pathname === "/home")
    return (
      <form>
        <Input type="text" placeholder="🍳" />
      </form>
    );

  return null;
}
