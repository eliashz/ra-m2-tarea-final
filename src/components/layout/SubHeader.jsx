import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Icon, InputText } from '../atoms'

const SubHeaderStyled = styled(FlexBox)`
  padding: 0.7em 2rem;
  border-bottom: 2px solid ${colors.tertiary};
  background-color: ${colors.secondary};
  gap: 1em;
`
const IconStyled = styled.svg`
  padding: 8px;
  background-image: ${colors.button};
  border-radius: 8px;
  height: 40px;
  width: 40px;
  cursor: pointer;
`

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled {...props} direction="row" align="center">
      {/* Esto debería de ser un Select */}
      <InputText name="input1" placeholder="Piso, chalet o garaje..." />
      {/* Esto debería de ser un Select */}
      <InputText name="input2" placeholder="Madrid, Barcelona o Zaragoza..." />
      <IconStyled>
        <Icon />
      </IconStyled>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
