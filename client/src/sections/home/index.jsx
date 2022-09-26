import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";

import CardsList from "../../components/cardsList";
import Filter from "../../components/filter";
import Pagination from "../../components/pagination";
import Loader from "../../components/loader";

import { BodyContainer, NotFound } from "./styles";

export default function Home() {
  const list = useSelector((state) => state.recipes);
  const filter = useSelector((state) => state.filter);
  const isSearching = useSelector((state) => state.searching);
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState([]);

  const dispatch = useDispatch();
  const totalPages = Math.ceil((filter.length || list.length) / 9);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  useEffect(() => {
    setPage(1);
  }, [list, filter]);

  function handlePagination(currentPage) {
    setPage(currentPage);
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

  const Content = () => {
    if (isSearching) {
      return <Loader />;
    }
    
    return !recipes.length ? (
      <NotFound>
        <h2>No se encontraron recetas</h2>
      </NotFound>
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
    );
  };

  return (
    <>
      <h1 className="title">Recetas</h1>
      <BodyContainer>
        <Filter />
        <Content />
      </BodyContainer>
    </>
  );
}
