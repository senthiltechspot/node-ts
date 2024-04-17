import express from "express";
import {
  getApplicant,
  createApplicant,
  deleteApplicant,
  updateApplicant,
  getApplicantById,
} from "../controllers/applicantController";

const router = express.Router();

router.get("/", getApplicant);
router.post("/", createApplicant);
router.route("/:id").get(getApplicantById).put(updateApplicant).delete(deleteApplicant);

export default router;
