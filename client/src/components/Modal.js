import React, { useState, forwardRef, useImperativeHandle } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import Info from "./Info";
const CategoryModal = forwardRef(({ type, image }, ref) => {
  const [show, setShow] = useState(false);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useImperativeHandle(ref, () => ({
    handleShow() {
      setShow(true);
    },
  }));

  const handleClose = (category) => {
    if (category) {
      dispatch(actions.setCategory(category));
    }
    setShow(false);
  };
  
  return (
    <>
      {type == "category" ? (
        <Button
          variant="primary"
          onClick={() => {
            setShow(true);
          }}
        >
          Select Category
        </Button>
      ) : (
        <></>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {type == "category" ? "Category" : "Image Info"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {type == "category" ? (
            categories.map((category) => (
              <Button
                key={category}
                variant="secondary"
                onClick={() => {
                  handleClose(category);
                }}
              >
                {category}
              </Button>
            ))
          ) : (
            <Info image={image}></Info>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default CategoryModal;
