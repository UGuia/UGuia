//import Button from "../components/button";
import Card from "../components/card";
import Link from "next/link";
//import Connection from "../database/connect";
import TiendasQuery from "../database/Queryes/TiendasQuery";
import Image from "next/image";
import proc from "../public/243341.png";
import { Suspense } from "react";
export default async function Home() {
  //obtiene todas la tiendas
  const tiendas = await TiendasQuery.TiendasAll();

  return (
    <>
      <article className="container-tiendas">
        {tiendas.map((val, key) => {
          return (
            <div key={key}>
              <Link href={`/tiendas/${val.slug}`}>
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
                  <Card
                    tienda={{
                      nombre: val.nombre,
                      horario: val?.horario,
                      descripcion: val.descripcion,
                      imagen: val.imagen,
                    }}
                    url={val.slug}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </article>
    </>
  );
}
