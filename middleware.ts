import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only target admin routes
  if (pathname.startsWith("/admin")) {
    const isLoginPage = pathname === "/admin/login";
    const authToken = request.cookies.get("antaara_admin_token")?.value;

    const isAuthenticated = Boolean(authToken && authToken.length > 20);

    // If user is trying to access protected admin page without token
    if (!isAuthenticated && !isLoginPage) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // If user is already authenticated and visits login page, redirect to admin dashboard
    if (isAuthenticated && isLoginPage) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
