const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api/v1/users", userRoutes);

const globalError = require("./middlewares/globalError");
app.use(globalError);

module.exports = app;
