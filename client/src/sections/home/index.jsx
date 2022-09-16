import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";

import CardsList from "../../components/cardsList";
import Filter from "../../components/filter";
import Pagination from "../../components/pagination";

import { BodyContainer } from "./styles";

export default function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.recipes);
  const totalPages = list.length / 9;
	const [ currentPage, setCurrentPage ] = useState(1)
  const [recipes, setRecipes] = useState([]);

  function handlePagination(currentPage) {
		setCurrentPage(currentPage)
    
  }

	useEffect(() => {
		setRecipes(list.slice(currentPage - 1 * 9, currentPage * 8));
	}, [currentPage, list])

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Recetas</h1>
      <BodyContainer>
        <Filter />
        <div>
          <Pagination totalPages={totalPages} handle={handlePagination} />
          <CardsList list={recipes} />
          <Pagination totalPages={totalPages} handle={handlePagination} />
        </div>
      </BodyContainer>
    </>
  );
}
