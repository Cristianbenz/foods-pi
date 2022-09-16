import { useState } from "react";

export default function Pagination({ totalPages = 1, handle }) {
  const [pags, setPags] = useState([]);

  for (let i = 1; i <= totalPages; i++) {
    setPags((prevPags) => [...prevPags, i]);
  }

  function handleNum(num) {
    handle(num);
  }
  
  return (
    <div>
      <span></span>
      <ul>
        {pags.map((num) => {
          return (
            <li onClick={() => handleNum(num)} key={num}>
              num
            </li>
          );
        })}
      </ul>
      <span></span>
    </div>
  );
}
