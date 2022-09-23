import loaderGif from "../../assets/loader.gif";

import { LoaderContainer } from "./style";

export default function Loader() {
  return (
    <LoaderContainer>
      <img src={loaderGif} alt="Cargando..." />
    </LoaderContainer>
  );
}
