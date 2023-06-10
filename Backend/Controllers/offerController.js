// Author : Vishal patel
// Purpose : Define Offers posting and receiving logic that implemented in requests.
import fs from "fs";
import OfferModel from "../Models/offerModel.js";
import path from "path";

//Logic function for receiving offers
export const getoffer = async (req, res) => {
  const data = await OfferModel.find();
  try {
    res.status(200).json({
      message: "List of all offer",
      data,
      
    });
    console.log(res.body);
    
  } catch (error) {
    res.status(500).json({
      message: "Error on getting offes",
      error,
    });
  }
};

//Logic function for creating offers

export const postOffer = async (req, res) => {
  try {
    const { Name, Discount } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { buffer, mimetype } = req.file;

    const newOffer = new OfferModel({
      Name,
      Image: {
        data: buffer,
        contentType: mimetype,
      },
      Discount,
    });

    await newOffer.save();

    res.status(201).json({ message: 'Offer created successfully', offer: newOffer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create offer' });
  }
};
//Logic function for delete offers
export const deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await OfferModel.findOneAndDelete({ _id : id});
    if (!result) {
      return res.status(404).send("Offer not found");
    }

    res.status(200).send("Offer deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};



