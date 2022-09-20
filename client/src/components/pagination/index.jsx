import { Container, NumsList } from "./styles";

export default function Pagination({ totalPages, currentPage, handle }) {
  const pages = [1]

  for (let i = 2; i <= totalPages; i++) {
    pages.push(i);
  }

  function handleNum(num) {
    handle(num)
  }

  function handleLess() {
    handle(currentPage - 1)
  }
  
  function handleMore() {
    handle(currentPage + 1)
  }

  return (
    <Container>
      {currentPage > 1 && <span onClick={handleLess}>atras</span>}
      <NumsList>
        {pages.map((num) => {
          return (
            <li key={num} onClick={() => handleNum(num)} >{num}</li>
          );
        })}
      </NumsList>
      {currentPage < pages.length && <span onClick={handleMore}>adelante</span>}
    </Container>
  );
}
