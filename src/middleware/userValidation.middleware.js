import { ApiError } from "../utils/ApiError.js";
import { HTTP_STATUS } from "../utils/errorCodes.js";

export const userValidation = (req, res, next) => {
	const user = req.body;
	if (!user || !user.name || !user.email || !user.password) {
		throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Incomplete information", false);
	} else if (user.password.length < 8) {
		throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Minimum password length is 8.", false);
	} else {
		next();
	}
};
