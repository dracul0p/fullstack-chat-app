import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on ${PORT}`);
});
