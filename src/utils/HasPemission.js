const User = require("../models/User");
const Role = require("../models/Role");
const Permission = require("../models/Permission");

module.exports = async (permission, user) => {
  const userFind = await User.findByPk(user.id, { include: [{ model: Role }] });
  const roleId = userFind.role.id;
  const permissions = await Permission.findAll({ where: { roleId } });
  const permissionsMap = permissions.map(permission => permission.name);
  return permissionsMap.includes(permission);
};
