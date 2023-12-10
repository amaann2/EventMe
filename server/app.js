const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/events", eventRoutes);

const globalError = require("./middlewares/globalError");
app.use(globalError);

module.exports = app;
