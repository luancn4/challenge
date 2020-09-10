import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em;
  width: 12em;

  img {
    width: 100%;
    min-width: 100%;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin: 1em 0;
  }
`;

export const StyledModal = styled(Modal)`
  text-align: center;

  h2,
  h4 {
    margin: 0.3em 0;
  }

  .episodes {
    li {
      font-style: italic;
      margin-bottom: 0.1em;
    }

    margin-bottom: 0.2em;
    max-height: 20vh;
    overflow-y: scroll;
  }
`;

export const Button = styled.button`
  z-index: 1;
  position: relative;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  font-size: 1em;

  :hover {
    cursor: pointer;
  }

  :before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 4px solid hsl(236, 32%, 26%);
    transform-origin: center;
    transform: scale(1);
  }

  :hover::before {
    transition: all 0.75s ease-in-out;
    transform-origin: center;
    transform: scale(1.75);
    opacity: 0;
  }
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
    position: "absolute",
    width: 400,
    maxHeight: 700,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    padding: theme.spacing(1),
  },
}));
