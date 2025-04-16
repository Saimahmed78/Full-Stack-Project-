import mongoose, { Mongoose } from "mongoose";

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connection Successful");
  } catch (error) {
    console.error("DB Connection error", error);
    process.exit(1);
  }
};
export default dbconnection;
