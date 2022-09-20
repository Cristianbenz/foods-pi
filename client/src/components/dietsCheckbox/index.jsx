import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getDiets } from '../../redux/actions';

import { CheckBoxContainer } from './styles'

export default function DietsCheckbox({cb}) {
  const [ options, setOptions ] = useState([])
	const diets = useSelector(state => state.diets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  function onChange(e) {
    let check = e.target
    if(check.checked) {
      setOptions(other => [...other, check.value])
      cb([...options, check.value])
    } else {
      setOptions(other => other.filter(name => name !== check.value))
      cb(options.filter(name => name !== check.value))
    }
    
    
  }

  return (
    <CheckBoxContainer>
      <span>Tipo de dieta</span>
      {diets?.map((el) => (
        <label onChange={onChange} key={el.id} htmlFor={el.id}>
          <input type="checkbox" name={el.name} id={el.id} value={el.name} />
          {el.name}
        </label>
      ))}
    </CheckBoxContainer>
  );
}
