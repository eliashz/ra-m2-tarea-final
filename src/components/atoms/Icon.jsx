import styled from 'styled-components'
import PropTypes from 'prop-types'

function Icon({ children }) {
  const StyledIcon = styled.span`
    font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 40;
  `
  return <StyledIcon>{children}</StyledIcon>
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Icon
