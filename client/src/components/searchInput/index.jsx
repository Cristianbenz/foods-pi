import { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLoading, getRecipes } from '../../redux/actions';

import { Input } from "./styles";

export default function SearchInput() {
  const {push, location} = useHistory()
  const dispatch = useDispatch()
  const input = useRef()

  function onChange(e) {
    let input = e.target
    push(`/home?name=${input.value}`)
  }

  useEffect(() => {
    if(location.search.includes('name')) {
      let getName = location.search?.split('&').find(el => el.includes('name'));
      let query = getName.split('=').at(-1);
      dispatch(setLoading)
      dispatch(getRecipes(query))
    }
  }, [location.pathname, location.search,dispatch])

  function submit(e) {
    e.preventDefault()
    let getName = location.search?.split('&').find(el => el.includes('name'));
    let query = getName.split('=').at(-1);
    dispatch(getRecipes(query))
  }

  if (location.pathname === "/home")
    return (
      <form onSubmit={submit}>
        <Input ref={input} type="text" placeholder="🍳" onChange={onChange} />
      </form>
    );

  return null;
}
