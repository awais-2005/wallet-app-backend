import express from "express";
import healthRoutes from "./routes/health.route.js"
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js"
import { notFound } from "./middleware/notFound.middleware.js";
import { requestLogger } from "./middleware/requestLogger.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { authenticate } from "./middleware/authGuard.middleware.js";

const app = express();

app.use(express.json());
app.use(requestLogger)

app.use(authenticate);

app.use(healthRoutes);
app.use("/api", userRouter);
app.use("/auth", authRouter)

app.use(notFound);
app.use(errorHandler);

export default app;