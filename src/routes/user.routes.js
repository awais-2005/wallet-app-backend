import { Router } from "express";
import { authenticate } from "../middleware/authGuard.middleware.js";
import { getUsers, loginUser, registerUser } from "../controllers/users.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { userValidation } from "../middleware/userValidation.middleware.js";
import { ApiError } from "../utils/ApiError.js";
import { HTTP_STATUS } from "../utils/errorCodes.js";

const router = Router();

router.use(authenticate);

router.get(
	"/users",
	asyncHandler(async (req, res, next) => {
		const users = await getUsers();
		res.status(200).json({ users });
	})
);

router.post(
	"/register",
	userValidation,
	asyncHandler(async (req, res, next) => {
		const result = await registerUser(req.body);
		console.log(result);

		if (result) {
			res.status(201).json({ message: "Registered successfully." });
		} else {
			throw new ApiError(HTTP_STATUS.INTERNAL_ERROR);
		}
	})
);

router.post(
	"/login",
	asyncHandler(async (req, res, next) => {
		const result = await loginUser(req.body);
		console.log(result);
		
		if (result) {
			res.status(200).json({ statusCode: 200, message: "logged successfully." });
		} else {
			throw new ApiError(HTTP_STATUS.INTERNAL_ERROR);
		}
	})
);

export default router;
