import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <article>
      <div className="bienvenida">
        <Image
          src="/logo512.png"
          width={500}
          height={500}
          alt="logo uguia"
        ></Image>
        <h1>¡Bienvenido!</h1>
      </div>
      <form className="form">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" />
        <input
          className="btn-red-account"
          type="submit"
          value="Iniciar sesión"
        />
      </form>
      <div className="crear-cuenta">
        <p>¿No tiene una cuenta? Cree una</p>
        <Link href="/register">
          <input
            className="btn-red-account"
            type="button"
            value="Crear una cuenta"
          />
        </Link>
      </div>
    </article>
  );
}
