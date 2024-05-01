const { error } = require('console');
const mongoose= require('mongoose');

require('dotenv').config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser :true,
        UseUnifiedTopology:true,
    })
    .then(console.log("Db Connection successful sagar"))
    .catch((error)=>{
        console.log("error are occupied");
        console.error(error);
        process.exit(1);
    })  
     
} 