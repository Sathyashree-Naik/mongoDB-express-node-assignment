import request from "supertest";
import app from "../server"; // Adjust the path to your server file

describe("GET /api/users", () => {
  it("should return an array of users", async () => {
    const response = await request(app).get("/api/users");

    expect(response.status).toBe(200); // Check that the status code is 200
    expect(response.body).toHaveProperty("data"); // Check that the response has a "data" property
    expect(Array.isArray(response.body.data)).toBe(true); // Verify that "data" is an array
  });
});