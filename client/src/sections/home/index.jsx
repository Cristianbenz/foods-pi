import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";

import CardsList from "../../components/cardsList";
import Filter from "../../components/filter";
import Pagination from "../../components/pagination";
import Loader from "../../components/loader";

import { BodyContainer } from "./styles";

export default function Home() {
  const list = useSelector((state) => state.recipes);
  const isSearching = useSelector((state) => state.searching);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const totalPages = Math.ceil(list.length / 9);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  useEffect(() => {
    setPage(1)
  }, [list])

  function handlePagination(currentPage) {
    setPage(currentPage);
  }

  useEffect(() => {
    setRecipes(list.slice((page - 1) * 9, page * 9));
  }, [page, list]);

  return (
    <>
      <h1 className="title">Recetas</h1>
      <BodyContainer>
        <Filter />
        {isSearching ? (
          <Loader />
        ) : (
          <>
            {!list.length ? (
              <div>
                <h2>No se encontraron recetas</h2>
              </div>
            ) : (
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
            )}
          </>
        )}
      </BodyContainer>
    </>
  );
}
