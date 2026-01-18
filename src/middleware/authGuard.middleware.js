import { ApiError } from "../utils/ApiError.js";
import { HTTP_STATUS } from "../utils/errorCodes.js";

const authenticate = (req, res, next) => {
	const apiKey = req.headers["api-key"]
	if (apiKey && apiKey === process.env.API_KEY) {
		console.log("Authenticated!");
		next();
	} else {
		throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "An api-key is required.", false);
	}
};

export { authenticate };
