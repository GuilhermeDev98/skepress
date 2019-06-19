const Permission = require("../../src/models/Permission");

Permission.create({
  name: "role_store",
  description: "create role",
  roleId: 2
});

Permission.create({
  name: "permission_store",
  description: "create permission",
  roleId: 2
});
