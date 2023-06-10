// Author : Sohil
// Purpose : Define experince posting and receiving logic that implemented in requests.
import multer from 'multer'
//setting options for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
import experienceModel from "../Models/discoverModel.js";

//Logic function for receiving blogs
export const getExperience = async (req, res) => {
   const data = await blogModel.find();
  
}

//Logic function for creating(posting) blogs
export const postExperience = async (req, res) => {
    const data = req.body;
    try {
        console.log(data);
        // if (!data.image) {
        //     res.json({
        //       success: false,
        //       message: "You must provide at least 1 file"
        //     });
        //   }
        //   else {
            let imageUploadObject = {
                title: req.body.title,
                content: req.body.content,
              image: {
                data: req.body.image.buffer,
                contentType: req.body.image.mimetype
              }
            };
            const uploadObject = await experienceModel.create(imageUploadObject);
        //   }
          res.status(201).json({
            message : "Experience Created",
            Content : data
        })
    } catch (error) {
        res.status(501).json({
            message : "Error on creating experience",
            error
        })
    }
    


}