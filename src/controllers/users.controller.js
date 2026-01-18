import { ApiError } from "../utils/ApiError.js";
import { HTTP_STATUS } from "../utils/errorCodes.js";

export const getUsers = () =>
	new Promise((resolve, reject) =>
		setTimeout(() => reject(new ApiError(HTTP_STATUS.INTERNAL_ERROR, "Database connection failed", false)), 500)
	);
