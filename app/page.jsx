import Button from "../components/button";
import Connection from "../database/connect";

export default async function Home() {
  const connect = await Connection();
  //{connect}

  return (
    <h1>
      Hola
      <Button></Button>
    </h1>
  );
}
