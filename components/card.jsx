import Image from "next/image";
import { Suspense } from "react";
import proc from "../public/243341.png";
import { localizacionUser } from "./maps";
import Estrellas from "./estrellas";
import Link from "next/link";

export default function Card({
  nombre,
  horario,
  descripcion,
  image,
  localizacion,
}) {
  //import proc from `../public/${image}`;
  // let user = localizacionUser;
  return (
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
      <div className="tienda-descripcion">
        <h5>{nombre}</h5>
        {/* horario */}
        <Link href="/valorar-tienda">
          <Estrellas></Estrellas>
        </Link>
        <p>{horario}</p>
        {/* distancia */}
        <p id="distancia">Distancia: 1km</p>
        {/* descripcion */}
        <p>{descripcion}</p>
      </div>
    </div>
  );
}
