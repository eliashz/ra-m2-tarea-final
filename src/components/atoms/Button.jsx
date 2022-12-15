import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

export default function Button({
  children,
  color = colors.main,
  backgroundColor = colors.base,
  borderRadius,
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
        fontSize: '.6em',
        height: '25px',
        border: 'none',
        cursor: 'pointer',
        padding: '0 15px 0 15px',
        textAlign: 'center',
        margin: '0 0 5px 0',
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
  borderRadiuss: PropTypes.string,
  onClick: PropTypes.func,
}
