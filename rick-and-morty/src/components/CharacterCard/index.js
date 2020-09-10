import React from "react";
import { Container } from "./styles";
import { getCharacterById } from "../../actions/requests";

function CharacterCard(props) {
  return (
    <Container>
      <img
        alt= {props.name}
        src={props.img}
      />
      <div className="info">
        <p>{props.name}</p>
        <p>{props.status}</p>
      </div>
      <button onClick={getCharacterById(props.id)}>More info</button>
    </Container>
  );
}

export default CharacterCard;
