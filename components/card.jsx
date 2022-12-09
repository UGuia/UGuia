"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Estrellas from "./estrellas";
export default function Card({ tienda, url }) {
  const [tiendas, setTiendas] = useState(null);
  const [link, setLink] = useState(null);

  useEffect(() => {
    setTiendas(tienda);
    setLink(url);
  }, [tienda, url]);

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
          {/* <Link href={"/tiendas/" + url + "/valoracion"}>
          </Link> */}
          {/* <div>
            <a href={"/tiendas/" + url + "/valoracion"}>
            </a>
          </div> */}
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
