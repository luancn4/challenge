import React, { useEffect, useState } from "react";
import { getCharacters } from "../../actions/requests";
import CharacterCard from "../CharacterCard/index";
import { Container } from "./styles";

function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {}, []);

  return (
    <Container>
      <h1>Rick And Morty Characters</h1>
      <div className="cards">
        <CharacterCard />
      </div>
      <button onClick={getCharacters()}>Carregar personagens</button>
    </Container>
  );
}

export default CharactersList;
