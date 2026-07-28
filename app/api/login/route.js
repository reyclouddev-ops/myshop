import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { createToken } from "@/lib/auth";

export async function POST(req) {
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

  const token = createToken(user);

  const res = NextResponse.json({
    success: true
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return res;
}
