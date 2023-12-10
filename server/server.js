const app = require("./app");
const dotenv = require("dotenv");
const DatabaseConnection = require("./config/databaseConnection");
dotenv.config({ path: "./config.env" });

DatabaseConnection();

app.listen(process.env.PORT, () => {
  console.log(`App is Running at ${process.env.PORT} PORT`);
});
