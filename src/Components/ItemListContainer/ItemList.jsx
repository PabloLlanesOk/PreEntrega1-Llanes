import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((e, i) => (
        <Item key={`${e.titulo}-${i}`} {...e} />
      ))}
    </div>
  );
};

export default ItemList;
