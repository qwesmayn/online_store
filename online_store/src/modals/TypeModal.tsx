import { ReactElement } from "react";
import { Modal, Button } from "react-bootstrap";
import { Props } from "../models/IModalsProps";

const TypeModal = ({show, onHide} : Props): ReactElement => {
  return (
    <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Добавление типа</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Закрыть
      </Button>
      <Button variant="primary">
        Добавить
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default TypeModal;
