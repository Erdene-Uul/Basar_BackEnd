const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
var path = require("path");
var rfs = require("rotating-file-stream");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
var morgan = require("morgan");
const logger = require("./middleware/logger");
const fileupload = require("express-fileupload");
// Router оруулж ирэх
const newsRoutes = require("./routes/news");
const commercialRoutes = require("./routes/commercial");
// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: "./config/config.env" });

const app = express();

connectDB();

// create a write stream (in append mode)
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

// Body parser
app.use(cors());
app.use(express.json());
app.use(fileupload());
app.use(logger);
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/api/v1/news", newsRoutes);
app.use("/api/v1/commercials", commercialRoutes);
app.use(errorHandler);

const server = app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `.rainbow)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Алдаа гарлаа : ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
