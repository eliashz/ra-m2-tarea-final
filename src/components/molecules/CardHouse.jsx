import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'
import { Button, Card, Text } from '../atoms'

const StyledImg = styled.img`
  border-radius: ${dimensions.border};
`

const StyledText = styled(Text)`
  margin-left: 5%;
  margin-right: 5%;
`

const StyledButton = styled(Button)`
  border-radius: ${dimensions.border};
  font-size: 0.7em;
  padding: 2% 5%;
`

function CardHouse() {
  return (
    <Card>
      <FlexBox>
        <StyledImg src="../project/casa.jpeg" alt="Casa" />
        <StyledText color="grey" fontSize=".8em">
          Piso en Barcelona, Grac...
        </StyledText>
        <FlexBox direction="row" justify="space-around" align="center">
          <Text color="#000" fontSize=".9em">
            939.000€
          </Text>
          <StyledButton
            color="#fff"
            background="#4682b4"
            hoverColor="#4682b4CC"
          >
            Localizar
          </StyledButton>
        </FlexBox>
      </FlexBox>
    </Card>
  )
}

export default CardHouse
