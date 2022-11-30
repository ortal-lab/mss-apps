import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardImage from "./CardImage";
import { useSelector, useDispatch } from "react-redux";
import SelectBox from "./SelectBox";
import actions from "../redux/actions";
import Modal from "./Modal";
const ImagesList = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const next = useSelector((state) => state.next);
  const previous = useSelector((state) => state.previous);
  function prevPage() {
    try {
      if (previous) {
        dispatch(actions.next(previous.page));
      }
    } catch (err) {
      alert(err.message);
    }
  }

  function nextPage() {
    try {
      console.log(next);
      if (next) {
        dispatch(actions.next(next.page));
      }
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <div className="ImagesList">
      <div className="BtnDiv">
        <Container>
          <Row>
            <Col>
              <Button className="PrevBtn" onClick={prevPage}>
                prev
              </Button>
            </Col>
            <Col>
              <Modal type="category"/>
            </Col>
            <Col>
              <Button className="NextBtn" onClick={nextPage}>
                next
              </Button>
            </Col>
          </Row>
          <Row>
            {images.map((image) => {
              return (
                <Col key={image.id}>
                  <CardImage image={image}></CardImage>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ImagesList;
