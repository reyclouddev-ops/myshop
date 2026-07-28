import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function PUT(req,{params}){

await connectDB();

const body=await req.json();

await Order.findByIdAndUpdate(params.id,body);

return NextResponse.json({

success:true

});

}

export async function DELETE(req,{params}){

await connectDB();

await Order.findByIdAndDelete(params.id);

return NextResponse.json({

success:true

});

}
