import React, { useRef, useImperativeHandle } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "./Modal";
const CardImage = ({ image }) => {
  const childRef = useRef();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={image.webformatURL}
        onClick={() => childRef.current.handleShow()}
      />
      <Modal image={image} ref={childRef}></Modal>
    </Card>
  );
};

export default CardImage;
