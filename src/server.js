import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config();

connectDB();

(function () {
	try {
		app.listen(process.env.PORT, () => {
			console.log("Listening on PORT:", process.env.PORT);
		});
	} catch (error) {
		console.log("Failed to listen: ", error);
        process.exit(1);
	}
})();
