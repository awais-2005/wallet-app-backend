import { Router } from "express";
import { userValidation } from "../middleware/userValidation.middleware.js";
import { authorization } from "../middleware/authorization.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { getNewAccessToken, loginUser, registerUser } from "../controllers/auth.controller.js";


const authRouter = Router();

authRouter.post(
    "/register",
    userValidation,
    asyncHandler(async (req, res, next) => {
        console.log("register is called");
        
        const tokens = await registerUser(req.body);
        if (tokens) {
            res.status(201).json({ ...tokens, message: "Registered successfully." });
        } else {
            throw new ApiError(HTTP_STATUS.INTERNAL_ERROR);
        }
    })
);

authRouter.post(
    "/login",
    asyncHandler(async (req, res, next) => {
        const result = await loginUser(req.body);
        
        if (result) {
            res.status(200).json({ statusCode: 200, message: "logged successfully." });
        } else {
            throw new ApiError(HTTP_STATUS.INTERNAL_ERROR);
        }
    })
);


authRouter.post("/refresh", authorization, asyncHandler((req, res, next) => {
    const accessToken = getNewAccessToken(req.email);
    res.status(200).json({statusCode: 200, message: "New access token has been created.", accessToken});
}));

export default authRouter;