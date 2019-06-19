const User = require("../../src/models/User");

User.create({
  username: "GuilhermeDev",
  name: "Guilherme Santos",
  email: "guilhermedev@hotmail.com",
  password: "secret",
  phone: "79999042394",
  roleId: 2
});
