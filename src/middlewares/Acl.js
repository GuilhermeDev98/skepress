module.exports = (req, res, next) => {
  const user = req.user;

  req.isAdmin = user.role == "admin";

  next();
};
