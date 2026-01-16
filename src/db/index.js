import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
	try {
		const connectDetails = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connection has been established successfully!");
		console.log(connectDetails);
	} catch (error) {
		console.error("MongoDB Connection Failure: ", error);
        process.exit(1);
	}
}

export default connectDB;
