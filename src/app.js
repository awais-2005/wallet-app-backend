import express from "express";
import healthRoutes from "./routes/health.route.js"
import { notFound } from "./middleware/notFound.middleware.js";

const app = express();

app.use(express.json());

app.use(healthRoutes);

app.use(notFound);

export default app;