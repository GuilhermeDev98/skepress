const User = require("../models/User");
const Role = require("../models/Role");

module.exports = async (role, user) => {
  const userFind = await User.findByPk(user.id, { include: [{ model: Role }] });
  return userFind.role.name == role;
};
