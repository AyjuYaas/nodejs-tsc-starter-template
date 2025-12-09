import dotenv from "dotenv";
dotenv.config();

import express from "express";
import ApiError from "./utils/ApiError";
import defaultRoutes from "./routes/index.routes";

const app = express();

app.use(express.json());

app.use("/api", defaultRoutes);

// Other Paths
app.use(/.*/, (req, res) => {
  return ApiError.notFound(res, "Route not found");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
