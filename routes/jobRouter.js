import { Router } from "express";

const router = Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  showStats,
  updateJob,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router.get("/", getAllJobs);
router.post("/", checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router.get("/:id", validateIdParam, getJob);
router.patch(
  "/:id",
  checkForTestUser,
  validateJobInput,
  validateIdParam,
  updateJob
);
router.delete("/:id", checkForTestUser, validateIdParam, deleteJob);

export default router;
