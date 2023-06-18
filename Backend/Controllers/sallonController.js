// Author : Vishal & Rinal
// Purpose : Define Spa CRUD operation logic that implemented in requests
import sallonModel from "../Models/sallonModel.js";

//Logic function for receiving all Spas.
export const getallSallon = async (req, res) => {
  try {
    const data = await sallonModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to get sallons" });
  }
};

//Logic function for creating(posting) all Spas.
export const createSallon = async (req, res) => {
  try {
    const data = await req.body;
    const imgAryFetch =  JSON.parse(JSON.stringify(await req.files));
    console.log(imgAryFetch);
    const imgUrlMain = imgAryFetch.imgUrl[0].location;
    const imgUrlMult = imgAryFetch.mulImgUrl;
    // console.log("imgUrlMain : ",imgUrlMain );
    // console.log("imgAryMult :",imgUrlMult);
    const imgAry = [];
    await imgUrlMult.map((imgObj) =>{
     imgAry.push(imgObj.location) 
    })

    const newSallon = new sallonModel({
      ...data,
      imgUrl : imgUrlMain,
      mulImgUrl: imgAry,
    });

    await newSallon.save();
    console.log("new spa is : ", newSallon);
    res.status(201).send("Sallon is created");
  } catch (error) {
    console.log(error);
    res.status(501).send("Error in sallon creation");
  }
};

//Logic function for Updating Spa.
export const updateSallon = async (req, res) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };
  
      // Extract query from request headers
      const query = req.headers.query;
  
      let queryObj = {};
      if (query) {
        queryObj = JSON.parse(query);
      }
  
      // Find and update the sallon
      const result = await sallonModel.findOneAndUpdate(
        { _id: id, ...queryObj },
        updates,
        options
      );
  
      if (!result) {
        return res.status(404).send("Data not found");
      }
  
      // Return the updated sallon
      res.status(200).json(result);
    } catch (error) {
      console.log(error); // Log the error for debugging purposes
      res.status(500).send("Error updating sallon");
    }
  };
  

//Logic function for Deleting Spa.
export const deleteSallon = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await sallonModel.findOneAndDelete({ _id: id });
    if (!result) {
      return res.status(404).send("Sallon not found");
    }

    res.status(200).send("Sallon deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};
