import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Product from "@/models/Product";

export async function GET(){

await connectDB();

const data=await Product.find();

return NextResponse.json(data);

}

export async function POST(req){

await connectDB();

const body=await req.json();

await Product.create(body);

return NextResponse.json({

success:true

});

}
