import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // 1. Leer del localStorage si existe
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // 2. Guardar en localStorage cuando cambie el carrito
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto, cantidad) => {
    if (cantidad === 0) return;

    setCarrito((prev) => {
      const itemExistente = prev.find((item) => item.titulo === producto.titulo);
      if (itemExistente) {
        return prev.map((item) =>
          item.titulo === producto.titulo
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad }];
      }
    });
  };

  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
  const vaciarCarrito = () => setCarrito([]);
  const eliminarDelCarrito = (titulo) => {
    setCarrito((prev) => prev.filter((item) => item.titulo !== titulo));
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadTotal,
        vaciarCarrito,
        eliminarDelCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
