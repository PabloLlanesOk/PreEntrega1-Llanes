import React from "react";
import ItemList from "./ItemList";
import Cuaderno from "../../assets/Cauderno Exito n3.png";
import Lapiz from "../../assets/Lapiz.jpg";
import Goma from "../../assets/goma-faber.jpg";
import Regla from "../../assets/Regla Maped.jpeg";
import Tijera from "../../assets/Tijera Maped.jpg";
import Mochila1 from "../../assets/Mochila Nike Rosa.jpg";
import Mochila2 from "../../assets/Mochila Nike Jordan.jpg";
import Mochila3 from "../../assets/Mochila Influencer Fucsia.jpg";
import Mochila4 from "../../assets/Mochila Minecraft.jpg";
import Mochila5 from "../../assets/Mochila Trekking Naturhike 45L.jpg";
import Mochila6 from "../../assets/Mochila Messi.jpg";
import Mochila7 from "../../assets/Mochila Nike Elemental.jpg";
import Mochila8 from "../../assets/Mochila Celeste Everlast.jpg";
import Mochila9 from "../../assets/Mochila Rosada Wilson.jpg";
import Mochila10 from "../../assets/Mochila Lisa LSD.jpg";

import { useParams } from "react-router-dom"; // 👈 Necesario para leer la categoría de la URL

const ItemListContainer = () => {
  const { categoriaSeleccionada } = useParams(); // 👈 Esto viene desde la URL, por ejemplo /categoria/utiles

  const productos = [
    {
      title: "Lapiz Faber Castell",
      description: "Lapiz marca Faber Castell HB4",
      price: "400",
      photo: Lapiz,
      category: "utiles"
    },
    {
      title: "Goma Faber Castell",
      description: "Goma de Borrar Faber Castell de lapiz y lapicera",
      price: "300",
      photo: Goma,
      category: "utiles"
    },
    {
      title: "Regla Maped",
      description: "Regla Maped de 20 cm",
      price: "600",
      photo: Regla,
      category: "utiles"
    },
    {
      title: "Tijera Maped",
      description: "Tijera Maped escolar rosa",
      price: "1.400",
      photo: Tijera,
      category: "utiles"
    },
    {
      title: "Cuaderno Exito 100 Hojas",
      description: "Cuaderno Exito N3 de 100 hojas Rayado",
      price: "5.000",
      photo: Cuaderno,
      category: "cuadernos"
    },
    {
      title: "Mochila Nike Rosa",
      description: "Mochila Escolar Nike color Rosa 17L",
      price: "27.000",
      photo: Mochila1,
      category: "mochilas"
    },
    {
      title: "Mochila Nike Jordan",
      description: "Mochila Escolar Nike Jordan Color rojo de 17 Litros",
      price: "30.000",
      photo: Mochila2,
      category: "mochilas"
    },
    {
      title: "Mochila de Minecraft",
      description: "Mochila Escolar de Minecraft 17 Litros",
      price: "25.000",
      photo: Mochila4,
      category: "mochilas"
    },
    {
      title: "Mochila Rosa Influencer",
      description: "Mochila Escolar Influencer Fucsia de 17 Litros",
      price: "30.000",
      photo: Mochila3,
      category: "mochilas"
    },
    {
      title: "Mochila Naturhike",
      description: "Mochila De Trekking Celeste de 45 Litros",
      price: "40.000",
      photo: Mochila5,
      category: "mochilas"
    },
    {
      title: "Mochila Messi",
      description: "Mochila Escolar de Messi de 17 Litros",
      price: "20.000",
      photo: Mochila6,
      category: "mochilas"
    },
    {
      title: "Mochila Nike Elemental",
      description: "Mochila Escolar Nike Elemental color negro de 17 Litros",
      price: "27.000",
      photo: Mochila7,
      category: "mochilas"
    },
    {
      title: "Mochila Celeste Everlast",
      description: "Mochila Escolar Celeste Everlast de 17 Litros",
      price: "25.000",
      photo: Mochila8,
      category: "mochilas"
    },
    {
      title: "Mochila Rosada Wilson",
      description: "Mochila Escolar Wilson Rosada de 17 Litros",
      price: "26.000",
      photo: Mochila9,
      category: "mochilas"
    },
    {
      title: "Mochila Simple LSD",
      description: "Mochila Escolar LSD lisa de 17 Litros",
      price: "23.000",
      photo: Mochila10,
      category: "mochilas"
    }
  ];

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(
        (p) =>
          p.category.toLowerCase() ===
          categoriaSeleccionada.toLowerCase()
      )
    : productos;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        {categoriaSeleccionada
          ? `Categoría: ${categoriaSeleccionada}`
          : "Todos los productos"}
      </h2>
      <ItemList productos={productosFiltrados} />
    </div>
  );
};

export default ItemListContainer;
