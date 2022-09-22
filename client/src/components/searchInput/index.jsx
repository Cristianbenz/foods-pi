import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLoading, clearFilter, getRecipes } from '../../redux/actions';

import { Input } from "./styles";

export default function SearchInput() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const input = useRef()

  function onChange(e) {
    let value = e.target.value
    dispatch(setLoading)
    dispatch(clearFilter)
    dispatch(getRecipes(value))
  }

  function submit(e) {
    e.preventDefault()
    let query = input.value;
    dispatch(setLoading)
    dispatch(clearFilter)
    dispatch(getRecipes(query))
  }

  if (pathname === "/home")
    return (
      <form onSubmit={submit}>
        <Input ref={input} type="text" placeholder="🍳" onChange={onChange} />
      </form>
    );

  return null;
}
