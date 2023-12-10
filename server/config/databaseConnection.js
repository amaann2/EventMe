const mongoose = require("mongoose");

const DatabaseConnection = () => {
  mongoose
    .connect(process.env.MONGOURI)
    .then(() => {
      console.log("Database is connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = DatabaseConnection;
