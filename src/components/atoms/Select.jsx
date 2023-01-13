import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

export default function Select({
  children,
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
      <option value={children}>{children}</option>
    </select>
  )
}

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
