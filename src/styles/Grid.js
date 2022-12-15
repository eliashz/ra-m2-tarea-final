import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: ${({columns}) => columns || '1fr 1fr'};
    margin: ${({ margin }) => margin || '0'};
`

export default Grid
