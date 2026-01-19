import { Router } from "express";
import { authenticate } from "../middleware/authGuard.middleware.js";
import { getUsers } from "../controllers/users.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { userValidation } from "../middleware/userValidation.middleware.js";
import { registerUser } from "../controllers/register.controller.js";
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
		if (result) {
			res.status(201).json({ message: "Registered successfully." });
		} else {
			throw new ApiError(HTTP_STATUS.INTERNAL_ERROR, "Could not create user.");
		}
	})
);

export default router;
