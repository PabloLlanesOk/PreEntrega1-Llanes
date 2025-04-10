import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const productos = [
    {
      titulo: "Lapiz",
      descripcion: "Lapiz marca Faber Castell HB4",
      precio: "400",
      photo: "../../../image/Lapiz.jpg",
    },
    {
      titulo: "Goma Faber",
      descripcion: "Goma de Borrar Faber Castell de lapiz y lapicera",
      precio: "300",
      photo: "../../../image/goma-faber.jpg",
    },
    {
      titulo: "Regla",
      descripcion: "Regla Maped de 20 cm",
      precio: "600",
      photo: "../../../image/Regla Maped.jpeg",
    },
    {
      titulo: "Tijera Maped",
      descripcion: "Tijera Maped escolar rosa",
      precio: "1400",
      photo: "../../../image/Tijera Maped.jpg",
    },
    {
      titulo: "Cuaderno Exito 100h",
      descripcion: "Cuaderno Exito N3 de 100 hojas Rayado",
      precio: "5000",
      photo: "../../../image/Cauderno Exito n3.png",
    },
  ];
  return <ItemList productos={productos} />;
};

export default ItemListContainer;
