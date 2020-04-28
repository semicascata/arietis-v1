const User = require("../models/User");

// Check Authentication
exports.isAuth = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).send("Log in to access this page")
  }
};

// Grant access to specific roles
exports.authorize = (...roles) => {
  return async (req, res, next) => {
    const sessionId = req.session.passport.user;
    const user = await User.findById({_id: sessionId});

    if(!roles.includes(user.role)) {
      console.log(`User role: ${user.role}`.cyan.bold);
      res.status(403).send("User role is not authorized to acess this route")
      return false;
    }
    next();
  }
};
