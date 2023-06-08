const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/form-register").then(()=>{
    console.log("successfully connected")
}).catch(()=>{
    console.log("failed to connect")
})

const newschema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    middlename:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
})

const newmodel=new mongoose.model("collection",newschema)
module.exports=newmodel