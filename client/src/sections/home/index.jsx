import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, setLoading, setPage } from "../../redux/actions";

import CardsList from "../../components/cardsList";
import Filter from "../../components/filter";
import Pagination from "../../components/pagination";

import { BodyContainer } from "./styles";

export default function Home() {
  const list = useSelector((state) => state.recipes);
  const filter = useSelector((state) => state.filter);
  const page = useSelector((state) => state.page);
  const [recipes, setRecipes] = useState([]);

  const dispatch = useDispatch();
  const totalPages = Math.ceil((filter.length || list.length) / 9) || 1;

  useEffect(() => {
    dispatch(setLoading);
    dispatch(getRecipes());
  }, [dispatch]);

  function handlePagination(currentPage) {
    dispatch(setPage(currentPage));
  }

  useEffect(() => {
    if (filter.length && !filter[0]) {
      setRecipes([]);
    } else if (filter.length) {
      setRecipes(filter.slice((page - 1) * 9, page * 9));
    } else {
      setRecipes(list.slice((page - 1) * 9, page * 9));
    }
  }, [page, filter, list]);

  return (
    <div className="background homeBackground">
      <div>
        <h1 className="title">Recipes</h1>
        <BodyContainer>
          <Filter />
          <div>
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              handle={handlePagination}
            />
            <CardsList list={recipes} />
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              handle={handlePagination}
            />
          </div>
        </BodyContainer>
      </div>
    </div>
  );
}
