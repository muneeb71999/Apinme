const express = require("express");
const morgan = require("morgan");

// Init the application
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.static("public"));

// Routers
app.get("/", (req, res) => res.send("Application is working!"));

module.exports = app;
