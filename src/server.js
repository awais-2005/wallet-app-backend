import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

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
