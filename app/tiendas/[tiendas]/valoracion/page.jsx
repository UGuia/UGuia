import { Suspense } from "react";
import Image from "next/image";
import proc from "../../../../public/243341.png";
import FormValoracion from "../../../../components/formValoracion";

export default function page() {
  return (
    <article className="valoracion">
      <Suspense fallback={<p>Cargando Imagen...</p>}>
        <Image
          src={proc}
          alt=""
          className="tienda-image"
          width={700}
          height={700}
        />
      </Suspense>
      <FormValoracion></FormValoracion>
    </article>
  );
}
