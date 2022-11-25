import "../styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html>
      {/* <head>
        <title>Home page</title>
      </head> */}
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
