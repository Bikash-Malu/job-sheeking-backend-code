import mongoose from "mongoose";

export const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("db connected")
    
  }
  catch (error) {
    console.error(error);
  }
};
