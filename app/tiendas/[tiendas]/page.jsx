import { Suspense } from "react";
import Card from "../../../components/card";
import Foods from "../../../components/foods";
import Maps from "../../../components/maps";
import TiendasQuery from "../../../database/Queryes/TiendasQuery";
import NoFound from "./not-found";
//import proc from "https://www.google.com.mx/maps/place/Jos%C3%A9+Ma.+Arteaga,+Zona+Centro,+Centro,+91000+Xalapa-Enr%C3%ADquez,+Ver./@19.5311657,-96.9160773,19z/data=!4m5!3m4!1s0x85db320202bd0f25:0x89b249b0eb16ce97!8m2!3d19.5311986!4d-96.9155784";

export default async function Tiendas({ params }) {
  //buscar por slug en la base de datos
  const tienda = await TiendasQuery.TiendasBySlugCache(params.tiendas);
  //let tienda = arr.find((val) => val.slug === tiendas);

  if (!tienda) {
    return <NoFound></NoFound>;
  }

  return (
    <article>
      <Card
        nombre={tienda.nombre}
        horario={tienda.horario}
        descripcion={tienda.descripcion}
        image={tienda.imagen}
      />
      <Foods comidas={tienda.comidas}></Foods>
      <Suspense fallback={<p>Cargando Localizacion...</p>}>
        <Maps url="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d940.0608234937384!2d-96.9160773!3d19.5311657!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1669233569290!5m2!1ses-419!2smx"></Maps>
      </Suspense>
    </article>
  );
}
