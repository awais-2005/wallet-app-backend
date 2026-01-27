import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { HTTP_STATUS } from "../utils/errorCodes.js";
import { generateJWT } from "../utils/jwt.js";
import bcrypt from "bcryptjs";

export const registerUser = async (user) => {

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(user.password, salt);

	const refreshToken = generateJWT({email: user.email}, process.env.JWT_SECRET, process.env.REFRESH_TOKEN_EXPIRY);

	const userDoc = await User.create({
		email: user.email,
		fullName: user.fullName,
		password: hashedPassword,
		refreshToken,
		avatar: user.avatar || "",
	});

	// returning a access token.
	const accessToken = generateJWT({email: userDoc.email}, process.env.JWT_SECRET, process.env.ACCESS_TOKEN_EXPIRY);
	
	return { accessToken, refreshToken };
}

export const loginUser = async (credentials) => {

	const userDoc = await User.findOne({ email: credentials.email });

	if(!userDoc) {
		throw new ApiError(HTTP_STATUS.NOT_FOUND, `${credentials.identifier} is not registered.`);
	}

	const isVerified = await bcrypt.compare(credentials.password, userDoc.password);

	if(!isVerified) {
		throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Incorrect password!")
	}

	// returning a access token.
	const refreshToken = generateJWT({email: userDoc.email}, process.env.JWT_SECRET, process.env.REFRESH_TOKEN_EXPIRY);
	const accessToken = generateJWT({email: userDoc.email}, process.env.JWT_SECRET, process.env.ACCESS_TOKEN_EXPIRY);

	User.findByIdAndUpdate(userDoc._id, { refreshToken });

	return { accessToken, refreshToken };
};

export const getNewAccessToken = (email) => generateJWT({ email }, process.env.JWT_SECRET, process.env.ACCESS_TOKEN_EXPIRY);
