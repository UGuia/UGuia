"use client";
import Link from "next/link";
import { localizacionUser } from "./maps";
import Estrellas from "./estrellas";
import { useState } from "react";

export default function TiendasComponent({ tiendas }) {
  const [tienda, setTiendas] = useState(tiendas);
  return (
    <>
      <div className="tienda-descripcion">
        <h5>{tienda.nombre}</h5>
        <Estrellas></Estrellas>
        {/* <Link href="/valorar-tienda">
        </Link> */}
        <p>{tienda.horario}</p>
        <p id="distancia">Distancia: 1km</p>
        <p>{tienda.descripcion}</p>
      </div>
    </>
  );
}
