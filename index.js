// * imports 
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const PORT = 4001
const app = express();

// ! DB

// ? Cors
app.use(cors())

// ? body parser
app.use(express.json())

// ? routes
app.get("/", (req, res) => {
    res.send("Welcome to my api")
})

// ! app.use("/api/users", userRoutes)
// ! app.use("/api/auth", authRoutes)

// ? Logs
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})