require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// DB Connected And Check
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("DB Is Connected"));

// MiddelWhere
app.use(express.json());
app.use(cors());

// Routers

const PORT = process.env.PORT || 5000;

// Use Routers

app.listen(PORT, () => console.log(`Server Is Work on Port ${PORT}`));
