import PropTypes from 'prop-types'

export default function InputText({
  name,
  placeholder,
  style,
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      style={style}
      onChange={onChange}
    />
  )
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.obj,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
