//import Button from "../components/button";
import Card from "../components/card";
import Link from "next/link";
//import Connection from "../database/connect";
import TiendasQuery from "../database/Queryes/TiendasQuery";

export default async function Home() {
  //obtiene todas la tiendas
  const tiendas = await TiendasQuery.TiendasAll();

  return (
    <div>
      <article>
        {tiendas.map((val, key) => {
          return (
            <Link href={`/tiendas/${val.slug}`} key={key}>
              <Card
                nombre={val.nombre}
                horario={val.horario}
                descripcion={val.descripcion}
                image={val.imagen}
                localizacion={val.localizacion}
              />
            </Link>
          );
        })}
      </article>
    </div>
  );
}
