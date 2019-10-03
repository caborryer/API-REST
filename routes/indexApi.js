const express = require("express");

var app = express();

app.use("/api", require("./API/userRoutes"));
app.use("/api", require("./API/productRoutes"));
app.use("/api", require("./API/clientRoutes"));
app.use("/api", require("./API/salesRoutes"));


module.exports = app;
