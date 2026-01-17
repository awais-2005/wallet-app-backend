import { Router } from "express";
import { authenticate } from "../middleware/authGuard.middleware.js";
import { getUsers } from "../controllers/users.controller.js";

const router = Router();

router.use(authenticate);

router.get("/users", getUsers)

export default router;