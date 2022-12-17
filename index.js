const express = require("express");

const connection = require("./config/database");
const JobsRouters = require("./routes/jobs.routes");


const app = express();

app.use(express.json());

app.use("/jobs", JobsRouters);

require("dotenv").config();

const { LOCALHOST_PORT } = `0.0.0.0:$PORT` || 8000 ;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home Page.</h1>");
});

app.listen(LOCALHOST_PORT, async () => {
  try {
    await connection;
    console.log("Connected");
    console.log(`Server is running on the Localhost port : ${LOCALHOST_PORT}`);
  } catch (err) {
    console.log("Something went wrong in connection with database.");
    console.log(err);
  }
});
