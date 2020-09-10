import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

  p {
    font-style: italic;
    margin-bottom: .1em;
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
