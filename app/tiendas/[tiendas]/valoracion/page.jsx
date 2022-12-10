import { Suspense } from "react";
import Image from "next/image";
import proc from "../../../../public/243341.png";
import FormValoracion from "../../../../components/formValoracion";

import Connection from "../../../../database/connect";
import TiendasQuery from "../../../../database/Queryes/TiendasQuery";

//import TiendasQuery from "../../../../database/Queryes/TiendasQuery";

export default async function page({ params }) {
  await Connection();
  const tienda = await TiendasQuery.TiendasBySlugCacheAndComments(
    params.tiendas
  );
  return (
    <article className="valoracion">
      <Suspense fallback={<p>Cargando Imagen...</p>}>
        <Image
          src={"/" + tienda.imagen}
          alt=""
          className="tienda-image"
          width={700}
          height={700}
        />
      </Suspense>
      <FormValoracion title={tienda.nombre}></FormValoracion>
    </article>
  );
}
