import { Request, Router } from "express";
import ApiResponse from "../utils/ApiResponse";

const router = Router();

router.get("/", async (req, res) => {
  return ApiResponse.success(res, "Node + TSC Running successfully");
});

export default router;
