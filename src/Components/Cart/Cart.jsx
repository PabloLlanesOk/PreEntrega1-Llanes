import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Button, Table, Container, Alert } from "react-bootstrap";

const Cart = () => {
  const { carrito, vaciarCarrito, eliminarDelCarrito } = useCart();
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const finalizarCompra = () => {
    setCompraFinalizada(true);
    vaciarCarrito();
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.cantidad * parseFloat(item.price.replace('.', '').replace(',', '')),
    0
  );

  return (
    <Container className="mt-4">
      <div className="p-3 bg-light rounded border shadow-sm mb-4" style={{width: "21rem", height: "5rem", margin: "0 auto"}}>
        <h2 className="mb-4">Carrito de Compras</h2>
      </div>
      {compraFinalizada && (
        <Alert variant="success">¡Gracias por tu compra!</Alert>
      )}

      {carrito.length === 0 && !compraFinalizada ? (
        <p>El carrito está vacío.</p>
      ) : (
        !compraFinalizada && (
          <>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item, index) => (
                  <tr key={index}>
                    <td>{item.titulo}</td>
                    <td>{item.description}</td>
                    <td>${item.price}</td>
                    <td>{item.cantidad}</td>
                    <td>${item.cantidad * parseFloat(item.price.replace('.', '').replace(',', ''))}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h4 className="text-end">Total: ${total}</h4>

            <div className="text-end mt-3">
              <Button variant="success" className="me-2" onClick={finalizarCompra}>
                Finalizar Compra
              </Button>
              <Button variant="danger" onClick={vaciarCarrito}>
                Vaciar Carrito
              </Button>
            </div>
          </>
        )
      )}
    </Container>
  );
};

export default Cart;
