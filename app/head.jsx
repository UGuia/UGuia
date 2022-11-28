import Connection from "../database/connect";

export default async function Head() {
  await Connection();
  return (
    <>
      <title>Tiendas</title>
    </>
  );
}
