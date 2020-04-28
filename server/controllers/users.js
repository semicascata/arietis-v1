const User = require("../models/User");
const passport = require("passport");

// @desc Register Handler
// @route POST /oncrises/v1/auth/register
// @access Public
exports.registerHandler = async (req, res, next) => {
  const {
    user,
    email,
    password,
    password2
  } = req.body;

  // Array of errors
  let errors = [];

  // Check required fields
  if(!user || !email || !password || !password2) {
    errors.push({
      msg: "Please, fill in all fields"
    });
  };

  // Check password match
  if(password !== password2) {
    errors.push({
      msg: "Passwords don't match"
    });
  };

  // Check passwords length
  if(password.length < 6) {
    errors.push({
      msg: "Password should be at least 6 characters"
    });
  };

  // Check errors
  if(errors.length > 0) {
    res.status(401).send(errors);

  } else {
    // If 0 errors, check if the user already exists
    await User.findOne({ user })
    .then(thatUser => {
      if(thatUser) {
        console.log(`User ${thatUser.user} already exists`.red.bold);

        res.status(401).send(`User ${thatUser.user} already exists`);
        next();

      } else {
        // It is a brand new user
        const newUser = new User({
          user,
          email,
          password
        });

        // Save new user on database
        newUser.save()
        .then(thisUser => {
          console.log(`User ${thisUser.user} saved!`.green.bold);

          res.status(201).send(`User ${thisUser.user} saved!`);
        })
        .catch(err => {
          console.log(`Something goes wrong when saving user ${thisUser.user} on db...`.red.bold);

          res.status(401).send(`Something goes wrong when saving user ${thisUser.user} on db...`);
        });
      }
    });
  }
};

// @desc Login Handler
// @route POST /oncrises/v1/auth/login
// @access Public
exports.loginHandler = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if(err) {
      return next(err);
    };

    if(user) {
      req.logIn(user, function(err) {
        if(err) {
          return next(err);
        };

        console.log("\nUser successfully logged in!".green.bold);
        return res.status(201).redirect("/oncrises/v1/");
      });

    } else {
      console.log(`\nUser: ${req.body.user}\nError: ${info.message}`.red.bold);

      return res.status(400).send(info.message);
    }
  })(req, res, next);
};

// @desc Logout Handler
// @route GET /oncrises/v1/auth/logout
// @access Private
exports.logoutSession = async (req, res, next) => {
  let user = req.session.passport;

  if(user) {
    await req.logout();
  };

  if(!user) {
    console.log("There is no user to log out...".yellow.bold);
    res.status(401).send("There is no user to log out...");
    return false;
  }

  console.log("User logged out".yellow.bold);
  res.status(201).send("User successfully logged out, see ya!");
};
