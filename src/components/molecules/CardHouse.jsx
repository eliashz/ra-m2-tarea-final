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
          <Button
            color="#fff"
            backgroundColor="steelblue"
            borderRadius="7px"
            fontSize=".7em"
            height="25px"
            border="none"
            cursor="pointer"
            padding="0 15px 0 15px"
            textAlign="center"
            margin="0 0 5px 0"
          >
            Localizar
          </Button>
        </FlexBox>
      </FlexBox>
    </Card>
  )
}

export default CardHouse
