const express = require("express");
const cors = require("cors");
var multer = require("multer");

const app = express();

const index = require("./routes/index");
const productRoute = require("./routes/product.routes");
const userRoute = require("./routes/user.routes");
const authRoute = require("./routes/auth.routes");
const sellerRoute = require("./routes/seller.routes");
const orderRoute = require("./routes/order.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(index);
app.use("/api/", productRoute);
app.use("/api/", userRoute);
app.use("/api/", authRoute);
app.use("/api/", sellerRoute);
app.use("/api/", orderRoute);
app.use("/api/", express.static("images"));
app.use(express.static(__dirname));

//require('./routes/image_routes')(app);
//It just means that require('./app/routes.js') returns a function.
module.exports = app;
