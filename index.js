//App create krana h 
const express= require('express');
const { execPath } = require('process');
const app=express();

//port find krna h
const PORT=process.env.PORT || 3000;   
 
//middleware add krna h 
app.use(express.json()); 
  
const fileupload=require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
})); 
 
//db connect krna h
const db= require('./config/database') 
db.connect();
 
//cloudinary connection krna h
const cloudinary=require('./config/cloudnary');
cloudinary.cloudinaryConnect();
 
//route mount krna h
const upload=require('./routes/fileUpload'); 
app.use('/api/v1/upload',upload); 

//activate app   
app.listen(PORT,()=>{
    console.log(`app is running on the port no. ${PORT}`);
})
 
app.get('/', function (req, res) {
    res.send('Hello World! better now'); // This will serve your request to '/'.
  });  