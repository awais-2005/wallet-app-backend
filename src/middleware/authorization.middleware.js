import { ApiError } from "../utils/ApiError.js";
import { HTTP_STATUS } from "../utils/errorCodes.js";
import jwt from "jsonwebtoken";

export const authorization = (req, res, next) => {
    let accessToken = null;
    try {
        accessToken = req.headers["authorization"].split(" ")[1];
    } catch (err) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Access token is not found.")
    }

    if(!accessToken) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Access token is not found.");
    }

    try {
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        req.email = decoded.email;
    
        next();
    } catch (error) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, error);
    }
};