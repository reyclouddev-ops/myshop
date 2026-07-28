import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

nama:String,

harga:String,

kategori:String,

gambar:String,

status:{
type:String,
default:"Ready"
},

createdAt:{
type:Date,
default:Date.now
}

});

export default mongoose.models.Product ||
mongoose.model("Product",ProductSchema);
