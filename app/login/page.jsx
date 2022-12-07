import Image from "next/image";
import Link from "next/link";
import FormLogin from "../../components/login/formLogin";
export default function page() {
  return (
    <article className="form-account">
      <div className="bienvenida">
        <Image
          src="/logo512.png"
          width={600}
          height={600}
          alt="logo uguia"
        ></Image>
        <h1>¡Bienvenido!</h1>
      </div>
      <FormLogin></FormLogin>

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
