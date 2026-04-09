const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;


// middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174"
  ],
  credentials: true
}));

app.use(express.json());

// static folder (images)
app.use("/uploads", express.static("uploads"));

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

const { router: adminRoutes } = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});