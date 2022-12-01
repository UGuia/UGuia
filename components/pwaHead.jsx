import "../public/manifest.json";

export default function PwaHead() {
  return (
    <>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/logo.ico"></link>
      <meta name="theme-color" content="#fff" />
    </>
  );
}
