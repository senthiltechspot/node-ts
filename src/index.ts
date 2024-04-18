//Importing project dependancies that we installed earlier
import * as dotenv from "dotenv";
import express from "express";
import applicantRoutes from "./routes/applicantRoutes";
import sequelize from "./config/sequalize";

const app = express();

dotenv.config();
app.use(express.json());

// Sync Sequelize
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync({ force: false }); // Sync database
  })
  .then(() => {
    console.log("DB synced");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

//   Routes
app.get("/", (req, res) => {
  res.send("Hello, You are on the server!");
});
app.use("/awesome/applicant", applicantRoutes);

module.exports = app;
export default app;
