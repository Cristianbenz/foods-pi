import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import Loader from "../../components/loader";
import Card from "../card";

import { Cardscontainer, NotFound } from './styles'

export default function CardsList({ list }) {
  const isSearching = useSelector((state) => state.searching);

  if (isSearching) {
    return <Loader />;
  }

  return (
    !list.length ? (
      <NotFound>
        <h2>No recipes found</h2>
      </NotFound>
    ) : (
      <Cardscontainer>
        {list.map((rcp) => {
          return (
            <Link key={rcp.id} to={`/recipe/${rcp.id}`}>
              <Card
                id={rcp.id}
                name={rcp.name}
                image={rcp.image}
                healthScore={rcp.healthScore}
                diets={rcp.diets?.map(el => el.name || el)}
              />
            </Link>);
        })}
    </Cardscontainer>
    )
  );
}