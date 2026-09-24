import { NextResponse } from "next/server";
import { updateAdminPassword } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { currentPassword, newPassword, confirmPassword } = body;

    if (!currentPassword || !newPassword || !confirmPassword) {
      return NextResponse.json(
        { success: false, error: "Please provide current password, new password, and confirmation." },
        { status: 400 }
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { success: false, error: "New password and Confirm password do not match." },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { success: false, error: "New password must be at least 8 characters long." },
        { status: 400 }
      );
    }

    const result = updateAdminPassword(currentPassword, newPassword);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to update password." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Admin password updated successfully.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
