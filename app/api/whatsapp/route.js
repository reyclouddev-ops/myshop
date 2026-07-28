import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Whatsapp from "@/models/Whatsapp";

export async function GET(){

  await connectDB();

  const data = await Whatsapp.find().sort({
    prioritas:1
  });

  return NextResponse.json(data);

}

export async function POST(req){

  await connectDB();

  const body = await req.json();

  await Whatsapp.create(body);

  return NextResponse.json({
    success:true
  });

}
