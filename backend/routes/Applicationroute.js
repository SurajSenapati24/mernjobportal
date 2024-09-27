import express from "express";
import isAuthenticated from "../middlewares/Authenticate.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/Applicationcontroller.js";
 
const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);
router.route("/get").get(isAuthenticated, getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated, getApplicants);
router.route("/status/:id/update").post(isAuthenticated, updateStatus);
 

export default router;

