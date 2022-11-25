export default function Head({ params }) {
  const { tiendas } = params;
  const message = `Hello ${tiendas} foo`;
  return (
    <>
      <title>{message}</title>
    </>
  );
}
