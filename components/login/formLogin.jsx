"use client";

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
  async function FormLogin(e) {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    await consumirApi(data);
    //console.log(resJson);
  }
  return (
    <form className="form" onSubmit={FormLogin}>
      <label htmlFor="email">Correo electrónico:</label>
      <input type="email" name="email" />
      <label htmlFor="password">Contraseña:</label>
      <input type="password" name="password" />
      <input className="btn-red-account" type="submit" value="Iniciar sesión" />
    </form>
  );
}
