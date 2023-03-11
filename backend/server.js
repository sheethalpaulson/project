var mongoose = require('mongoose');
const app = require("./app");
const cloudinary = require("cloudinary");
//const connectDatabase = require("./config/database");
const cors = require("cors");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Connecting to database
mongoose.connect(`mongodb+srv://Sheethal:sheethal@cluster0.qkgnpli.mongodb.net/projectDB?retryWrites=true&w=majority`,
{
  useNewUrlParser: true, 

useUnifiedTopology: true


})
.then((data) => {
  console.log(`Mongodb connected with server `);
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const servnpmer = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
