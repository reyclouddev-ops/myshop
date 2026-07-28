import mongoose from "mongoose";

const WhatsappSchema = new mongoose.Schema({

nama:String,

nomor:String,

status:{
type:Boolean,
default:true
},

prioritas:{
type:Number,
default:1
}

});

export default mongoose.models.Whatsapp ||
mongoose.model("Whatsapp",WhatsappSchema);
