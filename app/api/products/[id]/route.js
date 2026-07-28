import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(req, { params }) {
  await connectDB();

  const product = await Product.findById(params.id);

  return NextResponse.json(product);
}

export async function PUT(req, { params }) {
  await connectDB();

  const body = await req.json();

  await Product.findByIdAndUpdate(params.id, body);

  return NextResponse.json({
    success: true
  });
}

export async function DELETE(req, { params }) {
  await connectDB();

  await Product.findByIdAndDelete(params.id);

  return NextResponse.json({
    success: true
  });
}
