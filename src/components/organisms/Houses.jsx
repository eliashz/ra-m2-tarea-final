import React from 'react'
import { Grid } from '../../styles'
import { CardHouse, CardFull } from '../molecules'

const arrayVacio = []

function Houses() {
  return (
    <Grid columns="repeat(auto-fit, minmax(10rem, 1fr))" gap="1em">
      <CardFull />
      {arrayVacio.map((item) => item)}
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
