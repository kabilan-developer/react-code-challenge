import React from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";

const PreviewModal = (props) => {
  const { previewShow, setPreviewShow, preview } = props;
  return (
    <Modal centered show={previewShow} onHide={() => setPreviewShow(false)}>
      <Modal.Header className="between" closeButton>
        <h5 className="mb-0 fw-bold">{preview.title}</h5>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <span>{preview.detail}</span>
          <a href={preview.article} target="_blank">
            <small>{!preview.article ? "--" : preview.article}</small>
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PreviewModal;
