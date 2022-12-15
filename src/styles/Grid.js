import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-gap: ${({gap}) => gap || '0'};
    grid-template-columns: ${({columns}) => columns || '1fr 1fr'};
    margin: ${({ margin }) => margin || '0'};
`

export default Grid
