"use client";
export default function Commentarios({ user }) {
  return (
    <li>
      <p>Nombre: {user.Nombre}</p>
      <p>Comentario: {user.comentario}</p>
    </li>
  );
}
