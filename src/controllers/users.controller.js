import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { HTTP_STATUS } from "../utils/errorCodes.js";

export const getUsers = () =>
	new Promise((resolve, reject) =>
		setTimeout(
			() =>
				reject(
					new ApiError(HTTP_STATUS.INTERNAL_ERROR, "Database connection failed", false)
				),
			500
		)
	);

export const registerUser = async (user) => await User.create(user);

export const loginUser = async (credentials) => {

	let userDoc = await User.findOne({ username: credentials.identifier });
	userDoc || (userDoc = await User.findOne({ email: credentials.identifier }));

	if(!userDoc) {
		throw new ApiError(HTTP_STATUS.NOT_FOUND, `${credentials.identifier} is not registered.`);
	}

	if(userDoc.password !== credentials.password) {
		throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Incorrect password!")
	}

	return userDoc;
};
