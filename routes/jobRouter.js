import { Router } from "express";

const router = Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from "../controllers/jobController.js";

router.get("/", getAllJobs);
router.post("/", createJob);
router.get("/:id", getJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;
