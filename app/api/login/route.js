import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    await connectDB();

    const { username, password } = await req.json();

    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Username tidak ditemukan"
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json({
        success: false,
        message: "Password salah"
      });
    }

    const res = NextResponse.json({
      success: true,
      message: "Login berhasil"
    });

    res.cookies.set("admin", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production"
    });

    return res;

  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err.message
    });
  }
}
