import React, { useEffect, useState } from "react";
import { getCharacters } from "../../actions/requests";
import CharacterCard from "../CharacterCard/index";
import { Container } from "./styles";

function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((result) => {
      setCharacters(result);
    });
  }, []);

  return (
    <Container>
      <h1>Rick And Morty Characters</h1>
      <div className="cards">
        {characters &&
          characters.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                id={character.id}
                img={character.image}
                name={character.name}
                status={character.status}
              />
            );
          })}
      </div>
    </Container>
  );
}

export default CharactersList;
