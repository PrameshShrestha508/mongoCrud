import express from "express";

import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";
const app = express();
// const express = require("express");
// const app = express();

// const dotenv = require("dotenv");
// const mongoose = require("mongoose");

dotenv.config();

// Database connect
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("connected to db")
);

// import routes
// const productRoutes = require("./routes/product");

// Middleware
app.use(express.json());
app.use("/api/products/", productRoutes);

// App Listen
app.listen(4000, () => {
  console.log("server app running in port 4000");
});
