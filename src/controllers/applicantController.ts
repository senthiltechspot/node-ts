import { Request, Response } from "express";
import Applicant from "../models/applicant";
import { errorHandler } from "../utils/errorHandler";

// Controller functions
// get all applicants
export async function getApplicant(req: Request, res: Response): Promise<void> {
  try {
    const applicant = await Applicant.findAll();
    if (!applicant || applicant.length === 0) {
      res.status(404).json({ message: "No Applicant found" });
    } else {
      res.json(applicant);
    }
  } catch (error: any) {
    console.error(error);
    errorHandler(error, res);
  }
}

// get applicant by id
export async function getApplicantById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const applicant = await Applicant.findByPk(req.params.id);
    if (!applicant) {
      res.status(404).json({ message: "No Applicant found" });
    } else {
      res.json(applicant);
    }
  } catch (error: any) {
    console.error(error);
    errorHandler(error, res);
  }
}

// create new applicant
export async function createApplicant(
  req: Request,
  res: Response
): Promise<void> {
  const { firstName, lastName, email, phoneNumber } = req.body;
  try {
    const newApplicant = await Applicant.create({
      firstName,
      lastName,
      email,
      phoneNumber,
    } as any);
    res.json({
      message: "Applicant created successfully",
      newApplicant,
    });
  } catch (error: any) {
    console.error(error);
    errorHandler(error, res);
  }
}

// update applicant
export async function updateApplicant(
  req: Request,
  res: Response
): Promise<void> {
  const { firstName, lastName, email, phoneNumber } = req.body;
  try {
    const applicant = await Applicant.findByPk(req.params.id);
    if (!applicant) {
      res.status(404).json({ message: "Applicant not found" });
    } else {
      const updateapplicant = await Applicant.update(
        { firstName, lastName, email, phoneNumber },
        {
          where: { id: req.params.id },
        }
      );
      res.json({
        message: "Applicant updated successfully",
        applicant: updateapplicant,
      });
    }
  } catch (error: any) {
    console.error(error);
    errorHandler(error, res);
  }
}

// delete applicant
export async function deleteApplicant(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.params;
  try {
    const applicant = await Applicant.destroy({ where: { id } });

    if (!applicant) {
      res.status(404).json({ message: "Applicant not found" });
    } else {
      res.status(200).json({ message: "Applicant deleted successfully" });
    }
  } catch (error: any) {
    console.error(error);
    errorHandler(error, res);
  }
}
