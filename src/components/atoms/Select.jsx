import PropTypes from 'prop-types'
import { colors } from '../../styles'

export default function Select({
  children,
  id,
  name,
  onChange,
  borderRadius,
  textDecoration,
  border,
  fontSize,
  padding,
  width,
  boxShadow,
  color = colors.main,
}) {
  return (
    <select
      type="text"
      id={id}
      name={name}
      onChange={onChange}
      style={{
        // Eliminar este style y usar styled-components
        outline: 'none',
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
      {/* Falta value y si se pasan 30 opciones, hay que mapear en lugar de tener una */}
      <option>{children}</option>
    </select>
  )
}

// Demasiadas props, sobretodo para styles
Select.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  borderRadius: PropTypes.string,
  textDecoration: PropTypes.string,
  border: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  boxShadow: PropTypes.string,
  color: PropTypes.string,
}
