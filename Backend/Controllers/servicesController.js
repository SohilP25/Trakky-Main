// Rinal DUtt
import  Services  from "../Models/servicesModel.js";

// Add a new service
export const addService = async (req, res) => {
  try {
    const services = req.body;
    const createservice = await Services.create(services);
    res.status(201).json(createservice);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a service by ID
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    await Services.findByIdAndRemove(id);
    res.status(204).end({msg : "succesfully deleted"});
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a service by ID
// export const updateService = async (req, res) => {
//   try {
//     const { id } = req.params.id;
//     const { name, price, category, time } = req.body;
//     const updatedService = await Services.findByIdAndUpdate(
//       id,
//       { name, price, category, time },
//       { new: true }
//     );
//     res.json(updatedService);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

export const updateService = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, category, time } = req.body;
  
      // Check if the provided ID is a valid MongoDB ObjectId
      // Find the service by ID and update its properties
      const updatedService = await Services.findByIdAndUpdate(
        id,
        { name, price, category, time },
        { new: true }
      );
  
      // Check if the service exists
      if (!updatedService) {
        return res.status(404).json({ error: 'Service not found' });
      }
  
      res.json(updatedService);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
// Get all services
 export const  getAllServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};