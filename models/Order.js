import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

nama:String,

wa:String,

username:String,

produk:String,

kategori:String,

harga:String,

serverName:String,

egg:String,

status:{
type:String,
default:"Pending"
},

createdAt:{
type:Date,
default:Date.now
}

});

export default mongoose.models.Order ||
mongoose.model("Order",OrderSchema);
