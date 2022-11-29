"use client";
export const localizacionUser = () => {
  if (typeof window !== "undefined") {
    const distancia = document.getElementById("distancia");
    if (!"geolocation" in navigator) {
      return alert(
        "Tu navegador no soporta el acceso a la ubicación. Intenta con otro"
      );
    }
    const onUbicacionConcedida = (ubicacion) => {
      console.log("Tengo la ubicación: ", ubicacion);
      console.log(distancia);
      console.log(ubicacion.coords.latitude);
    };
    const onErrorDeUbicacion = (err) => {
      console.log("Error obteniendo ubicación: ", err);
    };
    const opcionesDeSolicitud = {
      enableHighAccuracy: true, // Alta precisión
      maximumAge: 0, // No queremos caché
      timeout: 5000, // Esperar solo 5 segundos
    };
    // Solicitar
    const localizacion = navigator.geolocation.getCurrentPosition(
      onUbicacionConcedida,
      onErrorDeUbicacion,
      opcionesDeSolicitud
    );

    console.log(localizacion);
  }
};

export default function Maps({ url }) {
  localizacionUser();
  return (
    <div className="maps">
      <h5>Localizacion</h5>
      <iframe
        src={url}
        width="100%"
        height="100%"
        //style="border:0;"
        //allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <iframe src={url} frameborder="0"></iframe> */}
      {/* <Image src={proc} alt="" className="tienda-image" /> */}
    </div>
  );
}
