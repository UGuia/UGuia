import Image from "next/image";
import { Suspense } from "react";
import proc from "../public/243341.png";
import { localizacionUser } from "./maps";
import Estrellas from "./estrellas";
import Link from "next/link";
import TiendasComponent from "./tiendas";

export default function Card({
  nombre,
  horario,
  descripcion,
  image,
  localizacion,
}) {
  //import proc from `../public/${image}`;
  // let user = localizacionUser;
  const tienda = { nombre, horario, descripcion };
  return (
    <>
      <div className="card">
        <Suspense fallback={<p>Cargando Imagen...</p>}>
          <Image
            src={proc}
            alt=""
            className="tienda-image"
            width={400}
            height={400}
          />
        </Suspense>
        <TiendasComponent tiendas={tienda}></TiendasComponent>
      </div>
    </>
  );
}
