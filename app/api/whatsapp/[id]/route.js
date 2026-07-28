import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Whatsapp from "@/models/Whatsapp";

export async function PUT(req,{params}){

  await connectDB();

  const body = await req.json();

  await Whatsapp.findByIdAndUpdate(params.id,body);

  return NextResponse.json({
    success:true
  });

}

export async function DELETE(req,{params}){

  await connectDB();

  await Whatsapp.findByIdAndDelete(params.id);

  return NextResponse.json({
    success:true
  });

}
