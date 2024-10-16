import {Schema,model} from "mongoose";

let collection = 'employees' 
let schema = new Schema({
    name:{type:String,required:true},
    post:{type:String,required:true},
    salary:{Number:String,required:true}
},{
    timestamps:true
})

let Employee = model(collection,schema)
export default Employee

