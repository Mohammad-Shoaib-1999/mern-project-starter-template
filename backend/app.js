const express = require("express");
const app = express();

const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

app.use("/test", (req, res) => {
  res.send("Hello World");
});

// Include route files
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productsRoute = require("./routes/product");
const postRoute = require("./routes/post");
const recordRoute = require("./routes/record");

// Use routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/products", productsRoute);
app.use("/post", postRoute);
app.use("/record", recordRoute);

// app.use('post',post)

app.use(ErrorHandler);

module.exports = app;
