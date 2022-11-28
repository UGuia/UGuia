import Image from "next/image";
import proc from "../public/243341.png";

export default function Card({ nombre, horario, descripcion, image }) {
  //import proc from `../public/${image}`;
  return (
    <div className="card">
      <Image
        src={proc}
        alt=""
        className="tienda-image"
        width={"40%"}
        height={"40%"}
      />
      <div className="tienda-descripcion">
        <h5>{nombre}</h5>
        {/* horario */}
        <p>{horario}</p>
        {/* distancia */}
        <p>Distancia: 1km</p>
        {/* descripcion */}
        <p>{descripcion}</p>
      </div>
    </div>
  );
}
