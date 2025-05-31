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
import Cuaderno2 from "../../assets/Cuaderno ABC Espiral N1 60h.jpg";
import Cuaderno3 from "../../assets/Cuaderno Rivadavia N1 tapa dura 98h.jpg";
import Cuaderno4 from "../../assets/Cuaderno Rivadavia N1 tapa dura 50h.jpg";
import Cuaderno5 from "../../assets/Cuaderno Exito N1 tapa dura forrado 100h.jpg";
import Cuaderno6 from "../../assets/Cuaderno Gloria tapa blanda 48h.jpg";
import Cuaderno7 from "../../assets/Cuaderno Exito Colegial A4 100h cuadriculado.jpg";
import Cuaderno8 from "../../assets/Cuadernno Mooving A4 80h.jpg";
import Cuaderno9 from "../../assets/Cuaderno E3 Forrado Lunares 48h.jpg";
import Cuaderno10 from "../../assets/Cuaderno ABC A4 100h.png";
import Cuaderno11 from "../../assets/Cuaderno America A4 80h.jpg";
import Cuaderno12 from "../../assets/Cuaderno Avon 84H.png";

import { useParams } from "react-router-dom"; // 👈 Necesario para leer la categoría de la URL

const ItemListContainer = () => {
  const { categoriaSeleccionada } = useParams(); // 👈 Esto viene desde la URL, por ejemplo /categoria/utiles

  const productos = [
    {
      title: "Lapiz Faber Castell",
      description: "Lapiz marca Faber Castell HB4",
      price: "400",
      photo: Lapiz,
      category: "utiles",
    },
    {
      title: "Cuaderno Rivadavia N1",
      description: "Cuaderno Rivadavia N1 tapa dura 50 hojas cuadriculadas",
      price: "3.000",
      photo: Cuaderno4,
      category: "cuadernos",
    },
    {
      title: "Cuaderno Exito Colegial A4",
      description: "Cuaderno Exito Colegial A4 100 hojas cuadriculado",
      price: "5.000",
      photo: Cuaderno7,
      category: "cuadernos",
    },
    {
      title: "Goma Faber Castell",
      description: "Goma de Borrar Faber Castell de lapiz y lapicera",
      price: "300",
      photo: Goma,
      category: "utiles",
    },
    {
      title: "Regla Maped",
      description: "Regla Maped de 20 cm",
      price: "600",
      photo: Regla,
      category: "utiles",
    },
    {
      title: "Cuaderno Avon A4",
      description: "Cuaderno Avon A4 de 84 Hojas Rayado",
      price: "3.000",
      photo: Cuaderno12,
      category: "cuadernos",
    },
    {
      title: "Tijera Maped",
      description: "Tijera Maped escolar rosa",
      price: "1.400",
      photo: Tijera,
      category: "utiles",
    },
    {
      title: "Cuaderno Exito 100 Hojas",
      description: "Cuaderno Exito N3 de 100 hojas Rayado",
      price: "5.000",
      photo: Cuaderno,
      category: "cuadernos",
    },
    {
      title: "Mochila Nike Rosa",
      description: "Mochila Escolar Nike color Rosa 17L",
      price: "27.000",
      photo: Mochila1,
      category: "mochilas",
    },
    {
      title: "Cuaderno Exito N1 tapa dura",
      description: "Cuaderno Exito N1 tapa dura forrado 100 hojas rayadas",
      price: "3.000",
      photo: Cuaderno5,
      category: "cuadernos",
    },
    {
      title: "Mochila Nike Jordan",
      description: "Mochila Escolar Nike Jordan Color rojo de 17 Litros",
      price: "30.000",
      photo: Mochila2,
      category: "mochilas",
    },
    {
      title: "Cuaderno Mooving A4",
      description: "Cuaderno Mooving A4 80 hojas Rayado",
      price: "6.000",
      photo: Cuaderno8,
      category: "cuadernos",
    },
    {
      title: "Mochila de Minecraft",
      description: "Mochila Escolar de Minecraft 17 Litros",
      price: "25.000",
      photo: Mochila4,
      category: "mochilas",
    },
    {
      title: "Mochila Rosa Influencer",
      description: "Mochila Escolar Influencer Fucsia de 17 Litros",
      price: "30.000",
      photo: Mochila3,
      category: "mochilas",
    },
    {
      title: "Mochila Naturhike",
      description: "Mochila De Trekking Celeste de 45 Litros",
      price: "40.000",
      photo: Mochila5,
      category: "mochilas",
    },
    {
      title: "Cuaderno Gloria de 48 hojas",
      description: "Cuaderno Gloria tapa blanda 48 hojas cuadriculadas",
      price: "2.000",
      photo: Cuaderno6,
      category: "cuadernos",
    },
    {
      title: "Mochila Messi",
      description: "Mochila Escolar de Messi de 17 Litros",
      price: "20.000",
      photo: Mochila6,
      category: "mochilas",
    },
    {
      title: "Cuaderno E3 Forrado de Lunares",
      description: "Cuaderno E3 Forrado Lunares 48h",
      price: "3.000",
      photo: Cuaderno9,
      category: "cuadernos",
    },
    {
      title: "Mochila Nike Elemental",
      description: "Mochila Escolar Nike Elemental color negro de 17 Litros",
      price: "27.000",
      photo: Mochila7,
      category: "mochilas",
    },
    {
      title: "Cuaderno America A4",
      description: "Cuaderno America tamaño A4 de 80 hojas",
      price: "3.000",
      photo: Cuaderno11,
      category: "cuadernos",
    },
    {
      title: "Mochila Celeste Everlast",
      description: "Mochila Escolar Celeste Everlast de 17 Litros",
      price: "25.000",
      photo: Mochila8,
      category: "mochilas",
    },
    {
      title: "Mochila Rosada Wilson",
      description: "Mochila Escolar Wilson Rosada de 17 Litros",
      price: "26.000",
      photo: Mochila9,
      category: "mochilas",
    },
    {
      title: "Cuaderno ABC A4",
      description: "Cuaderno ABC A4 de 100 hojas",
      price: "4.000",
      photo: Cuaderno10,
      category: "cuadernos",
    },
    {
      title: "Mochila Simple LSD",
      description: "Mochila Escolar LSD lisa de 17 Litros",
      price: "23.000",
      photo: Mochila10,
      category: "mochilas",
    },
    {
      title: "Cuaderno ABC Espiral",
      description: "Cuaderno ABC Espiral N1 de 60 hojas Rayado",
      price: "3.000",
      photo: Cuaderno2,
      category: "cuadernos",
    },
    {
      title: "Cuaderno Rivadavia",
      description: "Cuaderno Rivadavia N1 tapa dura 50 hojas cuadriculado",
      price: "4.000",
      photo: Cuaderno3,
      category: "cuadernos",
    },
  ];

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(
        (p) => p.category.toLowerCase() === categoriaSeleccionada.toLowerCase()
      )
    : productos;

  return (
    <div className="container mt-4">
      <div
        style={{
          backgroundColor: "white",
          width: "20rem",
          border: "2px solid",
          borderRadius: "20px",
          margin: "0 auto",
          paddingTop: "10px",
        }}
      >
        <h2 className="text-center mb-4">
          {categoriaSeleccionada
            ? `Categoría: ${categoriaSeleccionada}`
            : "Todos los productos"}
        </h2>
      </div>

      <ItemList productos={productosFiltrados} />
    </div>
  );
};

export default ItemListContainer;
