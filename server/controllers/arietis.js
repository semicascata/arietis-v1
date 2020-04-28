// @desc Welcome Page
// @route GET /oncrises/v1/
// @acess Public
exports.getWelcome = (req, res, next) => {
  res.status(200).send("Welcome!");
};
