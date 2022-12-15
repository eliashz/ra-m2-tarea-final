import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Button, Card, Text, Title } from '../atoms'

const Img = styled.img`
  border-radius: '5px';
`

const TextImg = styled(Text)`
  margin-left: '5px';
`

const ButtonImg = styled(Button)`
  border-radius: '10px';
`

function CardHouse() {
  return (
    <Card>
      <FlexBox>
        <Img src="../project/casa.jpeg" alt="Casa" />
        <TextImg>Piso en Barcelona, Gracia.</TextImg>
        <FlexBox direction="row" justify="space-around">
          <Title color="#000" fontSize=".9em">
            939.000€
          </Title>
          <ButtonImg backgroundColor="steelblue">
            <Text color="#fff">Localizar</Text>
          </ButtonImg>
        </FlexBox>
      </FlexBox>
    </Card>
  )
}

export default CardHouse
