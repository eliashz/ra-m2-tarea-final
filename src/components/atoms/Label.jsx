import PropTypes from 'prop-types'

export default function Label({ htmlFor }) {
  return <label htmlFor={htmlFor} />
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
}
