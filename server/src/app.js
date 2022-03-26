const express = require("express");
const cors = require("cors");

const app = express();

const index = require("./routes/index");
const productRoute = require("./routes/product.routes");
const userRoute = require("./routes/user.routes");
const authRoute = require("./routes/auth.routes");
const sellerRoute = require("./routes/seller.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(index);
app.use("/api/", productRoute);
app.use("/api/", userRoute);
app.use("/api/", authRoute);
app.use("/api/", sellerRoute);

module.exports = app;
