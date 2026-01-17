import { Router } from "express";
import { authenticate } from "../middleware/authGuard.middleware.js";
import { getUsers } from "../controllers/users.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.use(authenticate);

router.get("/users", asyncHandler(async (req, res, next) => {
    const users = await getUsers();  
    res.status(200).json({ users });  
}))

export default router;