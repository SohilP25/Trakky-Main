// Author : Vishal & Rinal
// Purpose : Define Spa CRUD operation logic that implemented in requests
import spaModel from "../Models/spaModel.js";

//Logic function for receiving all Spas.
export const getallSpa = async (req, res) => {
  try {
    const data = await spaModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to get spas" });
  }
};

//Logic function for creating(posting) all Spas.
export const createSpa = async (req, res) => {
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

    const newSpa = new spaModel({
      ...data,
      imgUrl : imgUrlMain,
      mulImgUrl: imgAry,
    });

    await newSpa.save();
    console.log("new spa is : ", newSpa);
    res.status(201).send("Spa is created");
  } catch (error) {
    console.log(error);
    res.status(501).send("Error in spa creation");
  }
};

//Logic function for Updating Spa.
export const updateSpa = async (req, res) => {
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

    const result = await spaModel.findOneAndUpdate(
      { _id: id, ...queryObj },
      updates,
      options
    );
    if (!result) {
      return res.status(404).send("Data not found");
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

//Logic function for Deleting Spa.
export const deleteSpa = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await spaModel.findOneAndDelete({ _id: id });
    if (!result) {
      return res.status(404).send("Spa not found");
    }

    res.status(200).send("Spa deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};
