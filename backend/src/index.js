import express from "express";
const app = express();
const PORT = process.env.PORT || 5001;
import authRoutes from "./routes/auth.route.js";

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
