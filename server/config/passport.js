// The local authentication strategy authenticates users using a Username and Password.
// The strategy requires a verify Callback, which accepts these credentials and calls Done providing a user.
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

module.exports = (passport) => {
  passport.use(
    new localStrategy({
      usernameField: "user"
    }, (user, password, done) => {
      // Match user
      User.findOne({
          user: user
        })
        .then(user => {
          // If no user found
          if (!user) {
            return done(null, false, {
              message: "User not registered"
            });
          }
          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, {
                message: "Password incorrect"
              });
            }
          });
        })
        .catch(err => {
          console.log(`Error on authentication: ${err}`.red.bold);
        }); // Then/Catch end
    })
  ); // Passport.use end

  // Serialize user
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize user
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
