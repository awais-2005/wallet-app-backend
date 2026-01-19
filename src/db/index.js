import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
	try {
		const connectDetails = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connection has been established successfully!");
		
		console.log("Connection String: ", connectDetails.connection._connectionString);
		console.log("Host: ", connectDetails.connection.host);
		console.log("Port: ", connectDetails.connection.port);
	} catch (error) {
		console.error("MongoDB Connection Failure: ", error);
        process.exit(1);
	}
}

export default connectDB;
