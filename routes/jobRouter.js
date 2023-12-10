import { Router } from "express";

const router = Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from "../controllers/jobController.js";
import { validateJobInput } from "../middleware/validationMiddleware.js";

router.get("/", getAllJobs);
router.post("/", validateJobInput, createJob);
router.get("/:id", getJob);
router.patch("/:id", validateJobInput, updateJob);
router.delete("/:id", deleteJob);

export default router;
