import {Schema,model} from "mongoose";

let collection = 'stores' 
let schema = new Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    phone:{type:Number,required:true}
},{
    timestamps:true
})

let Store = model(collection,schema)
export default Store