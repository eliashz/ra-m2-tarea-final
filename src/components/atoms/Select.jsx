import PropTypes from 'prop-types'
import React from 'react'

export default function Select({
  id,
  name,
  onChange,
  placeholder,
  borderRadius,
  textDecoration,
  border,
  fontSize,
  padding,
  width,
  boxShadow,
}) {
  return (
    <select
      type="text"
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        outline: 'none',
        borderRadius,
        textDecoration,
        border,
        fontSize,
        padding,
        width,
        boxShadow,
      }}
    />
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  borderRadius: PropTypes.string,
  textDecoration: PropTypes.string,
  border: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  boxShadow: PropTypes.string,
}
