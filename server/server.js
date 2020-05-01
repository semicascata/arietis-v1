const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const session = require("express-session");
const passport = require("passport");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const { connectDB } = require("./config/db");
const port = process.env.PORT || 3000;

// Config env
require("dotenv").config({ path: `${__dirname}/config/config.env` });

const app = express();

// Initializing Passport
require("./config/passport")(passport);

// Database connection
connectDB();

app.use(xss()); // Prevent XSS
app.use(hpp()); // HPP Security

// Body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(xss());
app.use(hpp());

// Initializing Session
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: true,
  saveUninitialized: true
}));

app.use(mongoSanitize({
  replaceWith: "_" // Replace characters "$" and "."
}));

app.use(helmet()); // Initializing Helmet Security

// Limit requests
const limiter = rateLimit({
  windowsMs: 5 * 60 * 1000, // 5 mins
  max: 20,
  message: "Too many requests, try again after 10 minutes..."
});
app.use(limiter);

app.use(cors()); // Init CORS

// Passport middlewares
app.use(passport.initialize());
app.use(passport.session());

// Routes
const users = require("./routes/users");
const arietis = require("./routes/arietis");
const notes = require("./routes/notes");

// Mount point
app.use("/oncrises/v1/auth", users);
app.use("/oncrises/v1/", arietis);
app.use("/oncrises/v1/notes", notes);

// Dev logger
if(process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
};

// Handle production
if(process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public"));

  // Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
}

// Server port
app.listen(port, () => {
  console.log(`\nListen on:
    http://localhost:${port}/oncrises/v1/`.cyan.bold);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Promise error: ${err.message}`.red.bold);
});
