import React, { useState } from "react";
import { Container, StyledModal, useStyles, Button } from "./styles";
import { getCharacterById } from "../../actions/requests";

function CharacterCard(props) {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleModal = (id) => {
    setOpen(true);
    getCharacterById(id).then((res) => {
      setCharacterInfo(res);
    });
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Container>
      <img alt={props.name} src={props.img} />
      <div className="info">
        <p>{props.name}</p>
        <p>{props.status}</p>
      </div>
      <Button onClick={() => handleModal(props.id)}>More info</Button>

      <StyledModal open={open} onClose={closeModal}>
        <div className={classes.root}>
          <img alt={characterInfo.name} src={characterInfo.image} />
          <h2>{characterInfo.name}</h2>
          <h4>
            {characterInfo.episode && characterInfo.episode.length <= 1
              ? "Episode"
              : "Episodes"}
          </h4>
          <ul className="episodes">
            {characterInfo.episode &&
              characterInfo.episode.map((ep) => {
                return <li key={ep.name}>{ep.name}</li>;
              })}
          </ul>
          <Button onClick={closeModal}>Close</Button>
        </div>
      </StyledModal>
    </Container>
  );
}

export default CharacterCard;
