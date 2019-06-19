const Role = require("../../src/models/Role");

Role.create({
  name: "user",
  description: "Usuário"
});

Role.create({
  name: "admin",
  description: "Administrator"
});
