import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:{type:String},
    number:{type:Number}
})
export default mongoose.model.details||mongoose.model("detail",schema)