import { Router } from "express";

const router = Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

router.get("/", getAllJobs);
router.post("/", validateJobInput, createJob);
router.get("/:id", validateIdParam, getJob);
router.patch("/:id", validateJobInput, validateIdParam, updateJob);
router.delete("/:id", validateIdParam, deleteJob);

export default router;
