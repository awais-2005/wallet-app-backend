import { Router } from "express";
import { getUsers } from "../controllers/users.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { HTTP_STATUS } from "../utils/errorCodes.js";
import { User } from "../models/user.model.js";
import { authorization } from "../middleware/authorization.middleware.js";

const userRouter = Router();

userRouter.get(
	"/users",
	asyncHandler(async (req, res, next) => {
		const users = await getUsers();
		res.status(200).json({ users });
	})
);

// Why to add next here -- find out reason!
userRouter.get("/profile", authorization, asyncHandler(async (req, res, next) => {
	const user = await User.findOne({ email: req.email });
	
	if (user) {
		const data = {
			email: user.email,
			fullName: user.fullName,
			avatar: user.avatar || "",
		}
		res.status(200).json({statusCode: 200, data, message: "Operation successfull."});
	} else {
		throw new ApiError(HTTP_STATUS.INTERNAL_ERROR);
	}
}));

export default userRouter;
