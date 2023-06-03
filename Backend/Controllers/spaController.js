import spaModel from "../Models/spaModel.js";


export const getallSpa = async (req, res) => {
    try {
        const data = await spaModel.find();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to get spas' });
      }
};


export const createSpa = async (req, res) => {
    try {
        const data = req.body;
        const spaCreation = await spaModel.create(data);
        console.log(spaCreation);
        res.status(201).send("Spa is created");
      } catch (error) {
        res.status(501).send("Error in spa creation")
      }
};


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
    
        const result = await spaModel.findOneAndUpdate({ _id: id, ...queryObj }, updates, options);
        if (!result) {
          return res.status(404).send("Data not found");
        }
    
        res.status(200).send(result);
      } catch (err) {
        res.status(500).send(err);
      }
};


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

