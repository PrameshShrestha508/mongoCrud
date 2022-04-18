const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("connected to db")
);

// import routes
const productRoutes = require("./routes/product");

app.use(express.json());
app.use("/api/products/", productRoutes);

app.listen(4000, () => {
  console.log("server app running in port 4000");
});
