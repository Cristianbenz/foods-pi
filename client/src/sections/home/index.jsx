import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/actions";

import Layout from "../../components/Layout";
import CardsList from "../../components/cardsList";
import Filter from "../../components/filter";
import Pagination from "../../components/pagination";

import { BodyContainer } from "./styles";

export default function Home() {
  const { recipes, filter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const totalPages = Math.ceil(recipes.count / 9) || 1;

  function handlePagination(currentPage) {
    dispatch(setPage(currentPage));
  }

  return (
    <Layout title='Recipes' bgPic="homeBackground">
        <BodyContainer>
          <Filter />
          <div>
            <Pagination
              totalPages={totalPages}
              currentPage={filter.page}
              handle={handlePagination}
            />
            <CardsList list={recipes.rows} />
            <Pagination
              totalPages={totalPages}
              currentPage={filter.page}
              handle={handlePagination}
            />
          </div>
        </BodyContainer>
    </Layout>
  );
}
