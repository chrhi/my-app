import mongoose from "mongoose"


const url:string = process.env.DATABASE_URL!

export const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to data base");
  } catch (err) {
    console.error(err);
  }
};