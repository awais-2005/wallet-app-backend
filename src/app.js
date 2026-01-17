import express from "express";
import healthRoutes from "./routes/health.route.js"
import userRoutes from "./routes/user.routes.js"
import { notFound } from "./middleware/notFound.middleware.js";
import { requestLogger } from "./middleware/requestLogger.middleware.js";

const app = express();

app.use(express.json());

app.use(requestLogger)

app.use(healthRoutes);

app.use("/api", userRoutes);

app.use(notFound);

export default app;