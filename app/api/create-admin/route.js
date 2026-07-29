import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    const username = "admin";
    const password = "190327"; // Ganti sesuai keinginan

    const exists = await User.findOne({ username });

    if (exists) {
      return NextResponse.json({
        success: false,
        message: "Admin sudah ada"
      });
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({
      username,
      password: hash
    });

    return NextResponse.json({
      success: true,
      message: "Admin berhasil dibuat",
      username,
      password
    });

  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err.message
    });
  }
}
