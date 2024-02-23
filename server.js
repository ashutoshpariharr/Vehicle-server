require("dotenv").config();
const express = require("express");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");

const cors = require("cors");
const adminRouter = require("./router/admin-router");


const app = express();
const PORT = 5000;

app.use(cors());

app.use("/api/admin", adminRouter);

// Set up your routes
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);


const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Your server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

startServer();
