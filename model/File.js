const mongoose= require('mongoose');
const nodemialer=require('nodemailer');

const fileSchame= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    tags:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
})

fileSchame.post("save",async function(Doc){
    try {
        console.log("document-->",Doc);
        
    } catch (error) {
        console.log(error);
    }
})

module.exports= mongoose.model("File",fileSchame);