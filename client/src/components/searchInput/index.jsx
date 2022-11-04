import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { searchByName } from '../../redux/actions';

import { Input } from "./styles";

export default function SearchInput() {
  const { name } = useSelector(state => state.filter)
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  function onChange(e) {
    let value = e.target.value
    dispatch(searchByName(value.trim()))
  }

  if (pathname === "/home")
    return (
      <Input value={name} type="text" placeholder="🍳" onChange={onChange} />
    );

  return null;
}
