import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(215px, auto);
    grid-gap: 1em;
    justify-content: center;
    align-content: stretch
    width: 45%;
    background: blue;
`

export default Grid
