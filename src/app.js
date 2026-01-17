import express from "express";
import healthRoutes from "./routes/health.route.js"
import userRoutes from "./routes/user.routes.js"
import { notFound } from "./middleware/notFound.middleware.js";
import { requestLogger } from "./middleware/requestLogger.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(requestLogger)

app.use(healthRoutes);
app.use("/api", userRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;