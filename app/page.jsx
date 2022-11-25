//import Button from "../components/button";
import Card from "../components/card";
import Link from "next/link";
//import Connection from "../database/connect";
//import TiendasQuery from "../database/Queryes/TiendasQuery";

const arr = [
  {
    id: 1,
    nombre: "tienda 1",
    slug: "tienda-1",
    horario: "8am - 6pm",
    imagen: "243341.png",
    descripcion: "ejemplo de una descripcion breve",
    localizacion: {
      altitud: 19.8,
      longitud: 8.1,
    },
  },
  {
    id: 2,
    nombre: "tienda 2",
    slug: "tienda-2",
    horario: "8am - 6pm",
    imagen: "243341.png",
    descripcion: "ejemplo de una descripcion breve",
    localizacion: {
      altitud: 19.8,
      longitud: 8.1,
    },
  },
];

export default async function Home() {
  //const connect = await Connection();
  //{connect}

  //TiendasQuery.TiendasById("1271972897")

  return (
    <article>
      {arr.map((val, key) => {
        return (
          <Link href={`/${val.slug}`} key={key}>
            <Card
              nombre={val.nombre}
              horario={val.horario}
              descripcion={val.descripcion}
              image={val.imagen}
            />
          </Link>
        );
      })}
      {/* <Link href="/" />
      <Card /> */}
      {/* <Button></Button> */}
    </article>
  );
}
