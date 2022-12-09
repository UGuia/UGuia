"use client";
import { useState } from "react";

async function consumirApi(data) {
  const api = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return api.json();
}

export default function FormRegister() {
  const [message, setMessage] = useState(null);

  async function FormRegisterPost(e) {
    e.preventDefault();

    //const nombre = e.target.nombre.value + "|" + e.target.apellidos.value;
    const data = {
      nombre: e.target.nombre.value,
      apellidos: e.target.apellidos.value,
      email: e.target.email.value,
      password: e.target.password.value,
      telefono: e.target.telefono.value,
    };

    const api = await consumirApi(data);

    console.log(api);

    api.error === null ? (window.location.href = "/login") : setMessage(api);
  }

  return (
    <form className="form-register" onSubmit={FormRegisterPost}>
      <div className="register-div">
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" name="nombre" />
        </div>
        <div>
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" name="apellidos" />
        </div>
      </div>
      <label htmlFor="email">Correo electrónico:</label>
      <input type="email" name="email" />
      <label htmlFor="password">Contraseña:</label>
      <input type="password" name="password" />
      <label htmlFor="telefono">Número telefónico (opcional):</label>
      <input type="tel" name="telefono" />
      {/* imprimir mensaje */}
      {message ? (
        <p style={{ marginTop: "20px", fontSize: "1.5em" }}>{message.error}</p>
      ) : (
        ""
      )}

      <input className="btn-red-account" type="submit" value="Crear cuenta" />
      <p className="alert-email">
        Se enviará un correo electrónico de confirmación
      </p>
      <p className="alert-email">para validar su identididad</p>
    </form>
  );
}
