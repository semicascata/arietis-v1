const User = require("../models/User");
const passport = require("passport");

// @desc Login Page
// @route GET /oncrises/v1/auth/login
// @acess Public
exports.getLogin = (req, res, next) => {
  if(req.body) {
    let user = req.body;
    console.log(user);
  }
  res.status(200).json({
    success: true,
    msg: "This is the login page"
  });
};

/* -------------------------------------------------*/
// @desc Register Page
// @route GET /oncrises/v1/auth/register
// @acess Public
exports.getRegister = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "This is the register page"
  });
};

/* -------------------------------------------------*/
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
    res.status(401).json({
      success: false,
      errors: errors
    });

  } else {
    // If 0 errors, check if the user already exists
    await User.findOne({ user })
    .then(thatUser => {
      if(thatUser) {
        console.log(`User ${thatUser.user} already exists`.red.bold);

        res.status(401).json({
          msg: `User ${thatUser.user} already exists`
        });
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

          res.status(201).json({
            success: true,
            msg: `User ${thisUser.user} successfully saved on database!`
          });
        })
        .catch(err => {
          console.log(`Something goes wrong when saving user ${thisUser.user} on db...`.red.bold);

          res.status(401).json({
            success: false,
            msg: `Something goes wrong when trying to save the user ${thisUser.user} on database. Please, try again...`
          });
        }); // Catch end
      } // Else end
    }); // User.findOne -> Then end
  } // Else 0 errors end
};

/* -------------------------------------------------*/
// @desc Login Handler
// @route POST /oncrises/v1/auth/login
// @access Public
exports.loginHandler = (req, res, next) => {
  // passport.authenticate("local", {
  //   successRedirect: "/oncrises/v1/",
  //   failureRedirect: "/oncrises/v1/auth/login"
  // })(req, res, next);
  passport.authenticate("local", (err, user, info) => {
    if(err) {
      return next(err);
    };
    if (!user) {
      return res.redirect("/oncrises/v1/auth/login");
    };
    req.logIn(user, function(err) {
      if(err) {
        return next(err);
      };
      return res.redirect("/oncrises/v1/");
    });
  })(req, res, next);
  // console.log("User logged in".green.bold);
};

/* -------------------------------------------------*/
// @desc Logout Handler
// @route GET /oncrises/v1/auth/logout
// @access Private
exports.logoutSession = (req, res, next) => {
  req.logout();
  console.log("User logged out".yellow.bold);
  res.status(201).json({
    success: true,
    msg: "User successfully logged out, see ya!"
  });
};
