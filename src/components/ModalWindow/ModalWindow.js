import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./ModalWindowStyle.css";

const NotificationsPageModal = ({ title, description }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        className="button-bootstrap"
        onClick={() => setShow(true)}
      >
        Edit
      </Button>

      <Modal
        className="modal-custom"
        centered={true}
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w shadow-none"
        aria-labelledby="news-modal"
      >
        <Modal.Header
          closeButton
          className="modal-header-custom"
        ></Modal.Header>
        <Modal.Body>
          <Modal.Title id="news-modal">{title}</Modal.Title>
          <p>{description}</p>
          <Form>
            <div className="switch-button">
              <span>E-mail</span>
              <Form.Check type="switch" id="custom-switch" />
            </div>
            <div className="switch-button">
              <span>SMS</span>
              <Form.Check type="switch" id="custom-switch-2" />
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NotificationsPageModal;
