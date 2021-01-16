// Load the .env variables
const config = require("dotenv").config();
const app = require("./app");

//Init the applicatation
app.listen(
  process.env.PORT,
  console.log(`server started on port ${process.env.PORT}`)
);
