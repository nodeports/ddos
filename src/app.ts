import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimiterMiddleware from "./middlewares/rate-limiter";
import authRoutes from "./routes/auth";
import connectDB from "./utils/db";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimiterMiddleware);

app.use("/api/auth", authRoutes);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
