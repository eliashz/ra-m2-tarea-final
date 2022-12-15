import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-gap: ${({gap}) => gap || '0'};
    grid-template-columns: ${({columns}) => columns || '50% 50%'};
    margin: ${({ margin }) => margin || '0'};
`

export default Grid
