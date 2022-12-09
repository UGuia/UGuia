import { NextResponse } from "next/server";
import Cookies from "cookie";
import jwt from "jsonwebtoken";

export default function middlware(request, res) {
  //console.log("middleware");
  if (request.nextUrl.pathname.startsWith("/tiendas/valoracion")) {
    //const token = request.getHeader("Get-Cookie", "token");

    //let res = NextResponse.next();
    const token = request.cookies.get("token").value;

    if (!token) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }

    try {
      const pay = jwt.verify(token, process.env.TOKEN_SECRET);
      console.log(token);
      console.log(pay);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }

    //redireccionar a el login
    //console.log(token);
    //return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/tiendas/valoracion",
};
