import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <article className="form-account-register">
      <div className="bienvenida">
        <h1>Cree una cuenta con nosotros</h1>
      </div>
      <form className="form-register">
        <div className="register-div">
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="nombre">Apellidos:</label>
            <input type="text" />
          </div>
        </div>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" />
        <label htmlFor="telefono">Número telefónico (opcional):</label>
        <input type="tel" />
        <input className="btn-red-account" type="submit" value="Crear cuenta" />
        <p className="alert-email">
          Se enviará un correo electrónico de confirmación
        </p>
        <p className="alert-email">para validar su identididad</p>
      </form>
    </article>
  );
}
