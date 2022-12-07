"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Estrellas from "./estrellas";
export default function Card({ tienda }) {
  const [tiendas, setTiendas] = useState(null);

  useEffect(() => {
    setTiendas(tienda);
  }, [tienda]);

  //import proc from `../public/${image}`;
  // let user = localizacionUser;
  //const tienda = { nombre, horario, descripcion };
  //console.log(tiendas?.nombre);

  return (
    <>
      <div className="tienda-descripcion">
        <h5>{tiendas?.nombre}</h5>

        <Suspense fallback={<p>Cargando valoracion...</p>}>
          {/* <Link href="/tiendas/valorar-tienda"></Link> */}
          <Estrellas></Estrellas>
        </Suspense>
        <p>{tiendas?.horario}</p>
        <p id="distancia">Distancia: 1km</p>
        <p>{tiendas?.descripcion}</p>
      </div>
      {/* <TiendasComponent tienda={tienda}></TiendasComponent> */}
    </>
  );
}
