import React from "react";
import { Button, Card } from "react-bootstrap";

const Item = ({ titulo, descripcion, precio, photo }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>${precio}</Card.Text>
          <Button variant="primary">Ver Producto</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
