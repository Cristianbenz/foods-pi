import { Link } from 'react-router-dom'

import Card from "../card";

import { Cardscontainer } from './styles'

export default function CardsList({ list }) {
  return (
    <Cardscontainer>
      {list?.map((rcp) => {
        return (
          <Link to={`/recipe/${rcp.id}`}>
            <Card
              key={rcp.id}
              id={rcp.id}
              name={rcp.name}
              image={rcp.image}
              healthScore={rcp.healthScore}
              diets={rcp.diets?.map(el => el.name || el)}
            />
          </Link>);
      })}
    </Cardscontainer>
  );
}