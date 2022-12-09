"use client";
import { useState } from "react";

async function consumirApi(data) {
  const api = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  //console.log(api);
  return api.json();
}

export default function FormLogin() {
  const [message, setMessage] = useState(null);

  async function FormLoginPost(e) {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const api = await consumirApi(data);

    function LoginSuccess() {
      const token = api.data.token;
      console.log(token);

      localStorage.setItem("token", token);
      window.location.href = "/";
    }

    api.error === null ? LoginSuccess() : setMessage(api);

    //console.log(resJson);
  }
  return (
    <form className="form" onSubmit={FormLoginPost}>
      <label htmlFor="email">Correo electrónico:</label>
      <input type="email" name="email" />
      <label htmlFor="password">Contraseña:</label>
      <input type="password" name="password" />
      {message ? (
        <p style={{ marginTop: "20px", fontSize: "1.5em" }}>{message.error}</p>
      ) : (
        ""
      )}
      <input className="btn-red-account" type="submit" value="Iniciar sesión" />
    </form>
  );
}
