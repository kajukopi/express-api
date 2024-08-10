// app.js
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const connectDB = require("./config/db")
const userRoutes = require("./routes/users")

connectDB()

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/users", userRoutes)

module.exports = app
