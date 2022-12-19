import PropTypes from 'prop-types'

function Icon({ children }) {
  return <span className="material-symbols-outlined">{children}</span>
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Icon
