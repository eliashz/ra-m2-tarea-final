import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Button, Card, Text, Title } from '../atoms'

const Img = styled.img`
  border-radius: 5px;
`

const StyledText = styled(Text)`
  margin-left: 5px;
  margin-right: 5x;
`

const StyledButton = styled(Button)`
  border-radius: 7px;
  font-size: 0.7em;
  height: 20px;
  width: 90px;
  border: none;
  cursor: pointer;
`

function CardHouse() {
  return (
    <Card>
      <FlexBox>
        <Img src="../project/casa.jpeg" alt="Casa" />
        <StyledText color="grey" fontSize=".8em">
          Piso en Barcelona, Grac...
        </StyledText>
        <FlexBox direction="row" justify="space-around" align="center">
          <Title color="#000" fontSize=".9em">
            939.000€
          </Title>
          <StyledButton color="#fff" background="steelblue">
            Localizar
          </StyledButton>
        </FlexBox>
      </FlexBox>
    </Card>
  )
}

export default CardHouse
