import PropTypes from 'prop-types'
import { colors } from '../../styles'
import {Properties} from '../atoms';

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
    <select
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
      {values?.map((value) => <option key={value.id} value={value.name}>{value.name}</option>)}
      
    </select>
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
  values: PropTypes.objectOf,
  color: PropTypes.string,
}
