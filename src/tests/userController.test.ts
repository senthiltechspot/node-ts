import request from "supertest";
import app from "../index";
import applicant, { Applicant } from "../models/applicant";

describe("Applicant Controller", () => {
  const mockApplicant = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("GET /applicants should return status 200", async () => {
    jest.spyOn(applicant, "findAll").mockResolvedValueOnce([mockApplicant as Applicant]);

    const response = await request(app).get("/awesome/applicant");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockApplicant]);
  });

  test("GET /awesome/applicant/:id should return 404 if applicant not found", async () => {
    jest.spyOn(applicant, "findByPk").mockResolvedValueOnce(null);

    const response = await request(app).get("/awesome/applicant/1");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "No Applicant found" });
  });

  test("POST /awesome/applicant should create a new applicant", async () => {
    const newApplicantData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
    };
    jest.spyOn(applicant, "create").mockResolvedValueOnce({ ...newApplicantData, id: 1 });

    const response = await request(app)
      .post("/awesome/applicant")
      .send(newApplicantData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Applicant created successfully",
      newApplicant: { ...newApplicantData, id: 1 },
    });
  });

  test("PUT /awesome/applicant/:id should update an applicant", async () => {
    jest.spyOn(applicant, "findByPk").mockResolvedValueOnce(mockApplicant as Applicant);
    jest.spyOn(applicant, "update").mockResolvedValueOnce([1]);

    const updateData = { firstName: "Jane", lastName: "Doe" };
    const response = await request(app)
      .put("/awesome/applicant/1")
      .send(updateData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Applicant updated successfully",
      applicant: [1],
    });
  });

  test("PUT /awesome/applicant/:id should return 404 if applicant not found", async () => {
    jest.spyOn(applicant, "findByPk").mockResolvedValueOnce(null);

    const updateData = { firstName: "Jane", lastName: "Doe" };
    const response = await request(app)
      .put("/awesome/applicant/1")
      .send(updateData);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Applicant not found" });
  });

  test("DELETE /awesome/applicant/:id should delete an applicant", async () => {
    jest.spyOn(applicant, "destroy").mockResolvedValueOnce(1);

    const response = await request(app).delete("/awesome/applicant/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Applicant deleted successfully",
    });
  });

  test("DELETE /awesome/applicant/:id should return 404 if applicant not found", async () => {
    jest.spyOn(applicant, "destroy").mockResolvedValueOnce(0);

    const response = await request(app).delete("/awesome/applicant/1");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Applicant not found" });
  });
});
