import Image from "next/image";
import Link from "next/link";
import FormRegister from "../../components/register/formRegister";
export default function page() {
  return (
    <article className="form-account-register">
      <div className="bienvenida">
        <h1>Cree una cuenta con nosotros</h1>
        <FormRegister></FormRegister>
      </div>
    </article>
  );
}
