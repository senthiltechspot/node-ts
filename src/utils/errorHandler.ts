import { Request, Response } from "express";

export const errorHandler = (err: Error, res: Response) => {
  res.status(500).json({
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? "" : err.stack || "",
  });
};
