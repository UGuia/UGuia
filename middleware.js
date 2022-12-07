import { NextResponse } from "next/server";

export default function middlware(request) {
  //console.log("middleware");
  if (request.nextUrl.pathname.startsWith("/tiendas/valoracion")) {
    //return NextResponse.rewrite(new URL("/login", request.url));
    //redireccionar a el login
    const token = req.header("auth-token");
    console.log(token);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/tiendas/valoracion",
};
