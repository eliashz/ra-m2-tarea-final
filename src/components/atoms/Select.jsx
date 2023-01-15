import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectStyled = styled.select`
  outline: none;
  border-radius: 5px; // Venir de constantes
  text-decoration: none;
  border: 1px solid grey; // Venir de constantes
  font-size: 0.8em; // Venir de constantes
  padding: 9px 0 9px 15px;
  width: 35%; // Este valor aquí fuera, fuerzas que todos los select tengan el mismo ancho
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

export default function Select({ id, name, onChange, values }) {
  return (
    <SelectStyled type="text" id={id} name={name} onChange={onChange}>
      {values.map((value) => (
        <option key={value.id} value={value.name}>
          {value.name}
        </option>
      ))}
    </SelectStyled>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.objectOf),
}
