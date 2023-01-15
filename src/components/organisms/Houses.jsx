import React from 'react'
import { Grid } from '../../styles'
import { CardHouse, CardFull } from '../molecules'

function Houses() {
  return (
    <Grid columns="repeat(auto-fit, minmax(10rem, 1fr))" gap="1em">
      <CardFull />
      {/* Crea un array vacio e itera sobre el, intentalo otra vez por favor */}
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
    </Grid>
  )
}

export default Houses
