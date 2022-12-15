import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    margin: 2em 0 2em 2em;
`

export default Grid
