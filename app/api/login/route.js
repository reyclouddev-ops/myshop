import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { createToken } from "@/lib/auth";

export async function POST(req){

await connectDB();

const{

username,

password

}=await req.json();

const user=await User.findOne({

username

});

if(!user){

return NextResponse.json({

success:false,

message:"Username tidak ditemukan"

});

}

const cocok=await bcrypt.compare(

password,

user.password

);

if(!cocok){

return NextResponse.json({

success:false,

message:"Password salah"

});

}

const token=createToken(user);

return NextResponse.json({

success:true,

token,

username:user.username

});

}
