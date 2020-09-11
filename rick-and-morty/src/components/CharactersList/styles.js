import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3.5em;

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

  @media screen and (max-width: 768px) {
      padding: 0;
  }
`;
