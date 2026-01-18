import { Router } from "express";
import { authenticate } from "../middleware/authGuard.middleware.js";
import { getUsers } from "../controllers/users.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { userValidation } from "../middleware/userValidation.middleware.js";
import { registerUser } from "../controllers/register.controller.js";

const router = Router();

router.use(authenticate);

router.get("/users", asyncHandler(async (req, res, next) => {
    const users = await getUsers();  
    res.status(200).json({ users });  
}))

router.post("/register", userValidation, asyncHandler(async (req, res, next) => {
    const result = await registerUser(req.body);
    res.status(200).json({message: result});    
}))

export default router;