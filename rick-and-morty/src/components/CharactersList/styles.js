import styled from "styled-components"

export const Container = styled.div `
display: flex;
flex-direction: column;
padding: 0 10em;

h1 {
    padding: 1em 0;
    text-align: center;
    width: 100%;
}

.cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
`