import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Icon, InputText } from '../atoms'

const SubHeaderStyled = styled(FlexBox)`
  padding: 0.7em 2rem;
  border-top: 2px solid ${colors.tertiary};
  border-bottom: 2px solid ${colors.tertiary};
  background-color: ${colors.secondary};
  gap: 1em;
`
const IconStyled = styled.svg`
  background-color: blue;
`

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled {...props} direction="row" align="center">
      <InputText name="input1" placeholder="Piso, chalet o garaje..." />
      <InputText name="input2" placeholder="Madrid, Barcelona o Zaragoza..." />
      <Icon style={{ color: 'blue' }} />
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
