import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

export default function Button({
  children,
  color = colors.main,
  backgroundColor = colors.base,
  borderRadius,
  fontSize,
  height,
  border,
  cursor,
  padding,
  textAlign,
  margin,
  onClick = () => {},
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor,
        color,
        borderRadius,
        fontSize,
        height,
        border,
        cursor,
        padding,
        textAlign,
        margin,
      }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  cursor: PropTypes.string,
  padding: PropTypes.string,
  textAlign: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
}
