const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const morgan = require("morgan");

//Inializations
const app = express();
require("./config/config");
require("./models/db");
require("./auth/passport");

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

//Routes
app.use(require("./routes/indexApi"));
app.use(require("./routes/indexViews"));
// app.use(require('./routes/image.routes'));

// static files
app.use("/public", express.static(path.join(__dirname, "./public")));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
