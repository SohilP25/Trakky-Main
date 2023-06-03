import mongoose from "mongoose";

const userScheme = mongoose.Schema(
    {
        username: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
)

const userModel = mongoose.model("userModel", userScheme);
export default userModel;