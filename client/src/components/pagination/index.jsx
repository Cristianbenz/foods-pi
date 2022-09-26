import { useState } from "react";

import { Container, NumBox } from "./styles";

export default function Pagination({ totalPages, currentPage, handle }) {
  const pages = [1]
  const [input, setInpunt] = useState(1)

  for (let i = 2; i <= totalPages; i++) {
    pages.push(i);
  }

  function onKeyDown(e) {
    if(e.key === 'Enter') {
      const regexp = /[0-9]/
      if(!regexp.test(input) || parseInt(input) < 1) {
        setInpunt(1)
        handle(1)
      } else if(parseInt(input) > totalPages) {
        setInpunt(totalPages)
        handle(totalPages)
      } else {
        handle(parseInt(input))
      }
    }
  }

  function onChange(e) {
    setInpunt(e.target.value)
  }

  function handleLess() {
    setInpunt(prev => prev - 1)
    handle(currentPage - 1)
  }
  
  function handleMore() {
    setInpunt(prev => prev + 1)
    handle(currentPage + 1)
  }

  return (
    <Container>
      {currentPage > 1 && <span onClick={handleLess}>Anterior</span>}
        <NumBox value={input} type='text' onChange={onChange} onKeyDown={onKeyDown} />
        <p>de {totalPages}</p>
      {currentPage < pages.length && <span onClick={handleMore}>Siguiente</span>}
    </Container>
  );
}
