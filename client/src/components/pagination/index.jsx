import { useState } from "react";

import { Container, NumBox, Arrow } from "./styles";

export default function Pagination({ totalPages, currentPage, handle }) {
  const pages = [1]
  const [input, setInpunt] = useState(currentPage)

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
    if(currentPage !== 1) {
      setInpunt(prev => prev - 1)
      handle(currentPage - 1)
    }
  }
  
  function handleMore() {
    if(currentPage !== totalPages) {
      setInpunt(prev => prev + 1)
      handle(currentPage + 1)
    }
  }

  return (
    <Container>
      <Arrow className='bx bxs-left-arrow' disabled={currentPage === 1} onClick={handleLess} />
        <NumBox value={input} type='text' onChange={onChange} onKeyDown={onKeyDown} />
        <p>de {totalPages}</p>
      <Arrow className='bx bxs-right-arrow' disabled={currentPage === totalPages} onClick={handleMore} />
    </Container>
  );
}
