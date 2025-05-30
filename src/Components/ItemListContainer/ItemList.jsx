import React from "react";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

const ItemList = ({ productos }) => {
  return (
    <Container className="my-4">
      <Row className="g-4 justify-content-center">
        {productos.map((e, i) => (
          <Col key={`${e.titulo}-${i}`} xs={12} sm={6} md={4} lg={3}>
            <Item {...e} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
