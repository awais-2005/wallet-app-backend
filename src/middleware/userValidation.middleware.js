import { ApiError } from "../utils/ApiError.js";
import { HTTP_STATUS } from "../utils/errorCodes.js";

export const userValidation = (req, res, next) => {
	const {fullName, email, password} = req.body;
	if ([fullName, email, password].some((field) => !field || field?.trim() === "")) {
		throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Incomplete information", false);
	} else if (password.length < 8) {
		throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Minimum password length is 8.", false);
	} else {
		next();
	}
};
