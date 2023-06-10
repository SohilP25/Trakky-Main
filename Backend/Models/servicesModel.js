// Author : Rinal Dutt
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
    {
      name: 
        {  
            type: String,
            required: true 
        },
       price: 
            { 
            type: Number,
            required: true 
            },
        category: 
            { 
                type: String,
                required: true },
        time: 
            {
                type: String,
                required: true 
            }
}
);

const Services = mongoose.model('Services', serviceSchema);
export default Services;