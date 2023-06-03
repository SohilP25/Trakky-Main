import spaModel from "../Models/spaModel.js";

export const searchSpa = async (req, res) => {
  
    try {
        const { name , area , city } = req.query;
        const queryobject = {};
        if(name)
        {
          queryobject.name = { $regex : name ,$options : "i"};
          console.log(queryobject.catagory);
        }

        if(area)
        {
          queryobject.area = area;
          console.log(queryobject.area);
        }

        if(city)
        {
          queryobject.city = city;
          console.log(queryobject.catagory);
        }

        const data = await spaModel.find(queryobject);
        res.status(200).json({data});
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch spas' });
      }
};


//Filter by catagory
export const filterSpa = async (req, res) => {
    try {
        const { catagory } = req.query;
        const queryobject = {};
        if(catagory)
        {
          queryobject.catagory = catagory;
          console.log(queryobject.catagory);
        }
        const data = await spaModel.find(queryobject);
        res.status(200).json({data});
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch spas' });
      }
};
