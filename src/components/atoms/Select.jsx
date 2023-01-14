import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

const SelectStyled = styled.select`
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid grey;
  font-size: 0.8em;
  padding: 9px 0 9px 15px;
  width: 35%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

export default function Select({
  id,
  name,
  onChange,
  outline,
  borderRadius,
  textDecoration,
  border,
  fontSize,
  padding,
  width,
  boxShadow,
  values,
  color = colors.main,
}) {
  return (
    <SelectStyled
      type="text"
      id={id}
      name={name}
      onChange={onChange}
      style={{
        outline,
        borderRadius,
        textDecoration,
        border,
        fontSize,
        padding,
        width,
        boxShadow,
        color,
      }}
    >
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
  outline: PropTypes.string,
  borderRadius: PropTypes.string,
  textDecoration: PropTypes.string,
  border: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  boxShadow: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.objectOf),
  color: PropTypes.string,
}
