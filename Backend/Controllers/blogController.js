import blogModel from "../Models/blogModel.js";



export const getBlog = async (req, res) => {
   const data = await blogModel.find();
   try {
    res.status(200).json({
        message : "List of all blogs",
        data});
   } catch (error) {
    res.status(500).json({
        message : "Error on getting blogs",
        error
    })
   }
  
}


export const postBlog = async (req, res) => {
    let data = req.body;
    
    data = await blogModel.create(data);
    try {
        if (!data.type || !data.title || !data.content) {
            return res.status(501).json({
                error : "Type,Title and Content are required"
            })
        }
        res.status(201).json({
            message : "Blog Created",
            Content : data
        })
    } catch (error) {
        res.status(501).json({
            message : "Error on getting blogs",
            error
        })
    }
    


}