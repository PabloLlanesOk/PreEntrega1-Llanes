import React, { useState, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../Cart/CartContext";

const Item = ({ title, description, price, photo, category }) => {
  const [cantidad, setCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CartContext);

  const aumentar = () => setCantidad(cantidad + 1);
  const disminuir = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };

  const handleAgregar = () => {
    const producto = { titulo: title, description, price, photo, category };
    agregarAlCarrito(producto, cantidad);
    setCantidad(0); // Reinicia el contador si querés
  };

  return (
    <Card style={{ width: "14rem", height: "27rem" }}>
      <Card.Img
        variant="top"
        src={photo}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="small">{title}</Card.Title>
        <Card.Text className="card-description">{description}</Card.Text>
        <Card.Text>${price}</Card.Text>

        <div className="d-flex justify-content-center align-items-center mb-2">
          <Button variant="secondary" size="sm" onClick={disminuir}>
            -
          </Button>
          <span style={{ margin: "0 10px" }}>{cantidad}</span>
          <Button variant="secondary" size="sm" onClick={aumentar}>
            +
          </Button>
        </div>

        <Button
          variant="primary"
          onClick={handleAgregar}
          disabled={cantidad === 0}
          style={{ fontSize: "0.85rem" }}
        >
          Añadir al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
