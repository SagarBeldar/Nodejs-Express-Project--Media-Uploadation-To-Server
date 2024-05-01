const express= require ('express');
const router=express.Router();

const { localfileupload,uploadImage,uploadVideo,ImageCompressed}=require('../controller/fileUpload');

//api route
router.post("/localfileupload",localfileupload);
router.post("/uploadImage",uploadImage);
router.post("/uploadVideo",uploadVideo);
router.post("/ImageCompressed",ImageCompressed);

module.exports=router;