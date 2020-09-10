import React from "react";
import { Container } from "./styles";
import { getCharacterById } from "../../actions/requests";

function CharacterCard(props) {
  return (
    <Container>
      <img
        // alt should be the character name
        alt="Character"
        src={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
      />
      <div className="info">
        <p>Rick</p>
        <p>Alive</p>
      </div>
      <button onClick={getCharacterById(1)}>More info</button>
    </Container>
  );
}

export default CharacterCard;
