import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Order from "@/models/Order";

export async function POST(req){

await connectDB();

const body=await req.json();

const order=await Order.create(body);

return NextResponse.json(order);

}

export async function GET(){

await connectDB();

const data=await Order.find().sort({

createdAt:-1

});

return NextResponse.json(data);

}
