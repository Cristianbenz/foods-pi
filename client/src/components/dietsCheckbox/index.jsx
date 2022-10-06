import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getDiets } from '../../redux/actions';

import { CheckBoxContainer } from './styles'

export default function DietsCheckbox({cb, control, updateControl}) {
	const diets = useSelector(state => state.diets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  function handleCheck(pos) {
    let selected = []
    const newState = control.map((diet, index) => pos === index ? !diet : diet)
    updateControl(newState)

    
    newState.forEach((el, i) => {
      if(el) selected.push(diets[i].name)
    })

    cb(selected)
  }

  return (
    <CheckBoxContainer>
      <span>Type of diet</span>
      {diets?.map((el, i) => (
        <label key={el.id} htmlFor={el.id}>
          <input type="checkbox" onChange={() => handleCheck(i)} name={el.name} id={el.id} value={el.name} checked={control[i]} />
          {el.name}
        </label>
      ))}
    </CheckBoxContainer>
  );
}
