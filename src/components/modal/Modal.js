import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { useStyles } from "./modalStyle";
// um simples modal do material-ui
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  function handleChange(event) {
    const valueNumber = parseFloat(event.target.value);
    // retorna o valor selecionado pelo usúario para o form
    props.onChange(valueNumber);
    handleClose();
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Clique na % que queira usar</h2>
      <div className={classes.buttonContainer}>
        <button
          className={classes.button}
          onClick={handleChange}
          value="5"
          id="simple-modal-fivePercent"
        >
          Usar 5%
        </button>
        <button
          className={classes.button}
          onClick={handleChange}
          value="25"
          id="simple-modal-twentyFivePercent"
        >
          Usar 25%
        </button>
        <button
          className={classes.button}
          onClick={handleChange}
          value="50"
          id="simple-modal-fiftyPercent"
        >
          Usar 50%
        </button>
        <button
          className={classes.button}
          onClick={handleChange}
          value="75"
          id="simple-modal-seventyFivePercent"
        >
          Usar 75%
        </button>
        <button
          className={classes.button}
          onClick={handleChange}
          value="100"
          id="simple-modal-oneHundredPercent"
        >
          Usar 100%
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <button
        type="button"
        className={classes.openModalButton}
        onClick={handleOpen}
      >
        {props.children}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
