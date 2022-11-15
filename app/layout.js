export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Home page</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
