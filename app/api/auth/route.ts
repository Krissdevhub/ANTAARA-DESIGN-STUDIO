import { NextResponse } from "next/server";
import { verifyAdminCredentials, createSessionToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Both Admin ID and Password are required." },
        { status: 400 }
      );
    }

    const isValid = verifyAdminCredentials(username, password);

    if (isValid) {
      const token = createSessionToken();
      const response = NextResponse.json({ success: true, message: "Authenticated successfully" });

      response.cookies.set("antaara_admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: "Invalid Admin ID or Password." },
      { status: 401 }
    );
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out successfully" });
  response.cookies.delete("antaara_admin_token");
  return response;
}
