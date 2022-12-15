import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Button, Card, Text, Title } from '../atoms'

const Img = styled.img`
  border-radius: 5px;
`

const TextImg = styled(Text)`
  margin-left: 5px;
  margin-right: 5x;
`

const ButtonImg = styled(Button)`
  border-radius: 10px;
`
function CardHouse() {
  return (
    <Card>
      <FlexBox>
        <Img src="../project/casa.jpeg" alt="Casa" />
        <TextImg color="grey" fontSize=".8em">
          Piso en Barcelona, Gracia
        </TextImg>
        <FlexBox direction="row" justify="space-around" align="center">
          <Title color="#000" fontSize=".9em">
            939.000€
          </Title>
          <ButtonImg
            backgroundColor="steelblue"
            borderRadius="10px"
            color="#fff"
          >
            Localizar
          </ButtonImg>
        </FlexBox>
      </FlexBox>
    </Card>
  )
}

export default CardHouse
