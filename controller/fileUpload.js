const File=require("../model/file");
const cloudinary=require('cloudinary').v2;
//localfileupload ->handler function

exports.localfileupload= async(req,res)=>{
    try{
        //fetch file
        const file=req.files.file;
        console.log("file agayi h",file);
 
        //path
        let path=__dirname +"/files/"+Date.now() +`.${file.name.split('.')[1]}`;

        file.mv(path ,(err)=>{
            console.log("occupied error1"); 
            console.log(err);
            
        });
 
        res.json({ 
            success :true,
            message:"Local file uploaded"
        })
    }
    catch(error){
        console.log("occupied error");
        console.log(error);
    }
}

function isfiletypeSupported(supportedTypes,filetype){
    return supportedTypes.includes(filetype);
}

async function uploadFiletoCloudinary(file,folder,quality){
    const options={folder};
    options.resource_type="auto";

    if(quality){
        options.quality=quality;
    }

    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.uploadImage= async (req,res)=>{

    try{ 
        //data fetch 
        const {name,tags,email,}=req.body;
        console.log(name,tags,email);
 
        const file=req.files.fileImage;
        console.log(file);

        //validation
        const supportedTypes=["jpg","jpeg","png"];
        const filetype= file.name.split('.')[1].toLowerCase();
        console.log("FileType",filetype);

       if(!isfiletypeSupported(supportedTypes,filetype)){

         return res.status(400).json({
            suucess:false, 
            message:"invalid format of image",
         })
       } 
        
        //file supported then upload in cloudnary
     const response= await uploadFiletoCloudinary(file,"codehelp");
     console.log(response);
     
    // // data upload in db
     const fileData=await File.create({
        name, 
        tags,
        email,  
        imageUrl:response.secure_url, 
     })

    res.json({
        success:true,
        message: "Image Uploaded Successfully"
    })

    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong..",
        })
    }
}

exports.uploadVideo= async (req,res)=>{
    try {
        //data fetch
    const{name,tags,email}=req.body;
    console.log(name,tags,email);

    const file=req.files.fileVideo;
    console.log(file);

   //validation
    const supportedTypes=["mp4","mov"];

    const filetype= file.name.split('.')[1].toLowerCase();
    console.log("FileType",filetype);

     if(!isfiletypeSupported(supportedTypes,filetype)){

         return res.status(400).json({
            suucess:false, 
            message:"invalid format of Video",
         })
       }
        //file supported then upload in cloudnary
     const response= await uploadFiletoCloudinary(file,"codehelp");
     console.log(response);
 
       // data upload in db
     const fileData=await File.create({
        name, 
        tags,
        email,  
        imageUrl:response.secure_url, 
     })

    res.json({
        success:true,
        message: "Video Uploaded Successfully"
    })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"something went wrong"
        });
    }

}

exports.ImageCompressed =async (req,res)=>{
    try {
        //data fetch
    const{name,tags,email}=req.body;
    console.log(name,tags,email);

    const file=req.files.Imagessupress;
    console.log(file);

   //validation
    const supportedTypes=["jpg","jpeg","png"];

    const filetype= file.name.split('.')[1].toLowerCase();
    console.log("FileType",filetype);

     if(!isfiletypeSupported(supportedTypes,filetype)){

         return res.status(400).json({
            suucess:false, 
            message:"invalid format of Image",
         })
       }
        //file supported then upload in cloudnary
     const response= await uploadFiletoCloudinary(file,"codehelp",90);
     console.log(response);
 
       // data upload in db
     const fileData=await File.create({
        name, 
        tags,
        email,  
        imageUrl:response.secure_url, 
     })

     async function sag(doc){
        console.log(doc);
     }

    res.json({
        success:true,
        imageUrl:response.secure_url, 
        message: "Image Uploaded Successfully"
    })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"something went wrong"
        });
    }
}