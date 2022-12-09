"use client";
import Estrellas from "./estrellas";
import { useState } from "react";

async function consumirApi(data, url) {
  //console.log("/api" + url);
  const jwt = localStorage.getItem("token");
  const api = await fetch("/api" + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(data),
  });

  return api.json();
}

export default function FormValoracion() {
  const [estrella, setEstrella] = useState(null);

  function GuardarOpinion(e) {
    e.preventDefault();

    const data = {
      comentario: e.target.opinion.value,
      valoracion: estrella,
      fecha: e.target.fecha.value,
    };

    const url = document.location.pathname;

    if (estrella > 0) {
      const api = consumirApi(data, url.slice(8));

      if (api.error === null) {
        window.location.href = "/";
      }
    }
  }

  function estrellasChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setEstrella(e.target.value);
  }

  return (
    <>
      <h1>¿Qué te pareció el servicio de Pizzatopia?</h1>
      <form onChange={estrellasChange}>
        <Estrellas></Estrellas>
      </form>
      <form onSubmit={GuardarOpinion}>
        <label htmlFor="opinion">Fecha en que visito el lugar</label>
        <input type="datetime-local" name="fecha" />
        <label htmlFor="opinion">¿Tienes alguna recomendación?</label>
        <input type="text" name="opinion" />
        <input
          className="btn-red-account"
          type="submit"
          value="Enviar opinión"
        />
      </form>
      <p style={{ fontSize: "2em" }}>
        {estrella > 0 ? "" : "debes de valorar"}
      </p>
    </>
  );
}
