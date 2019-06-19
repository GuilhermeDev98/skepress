const HasPemission = require("../utils/HasPemission");
const HasRole = require("../utils/HasRole");

module.exports = {
  async me(req, res) {
    // if (await HasPemission("role_sstore", req.user)) {
    //   console.log("permitido");
    // } else {
    //   console.log("não permitido");
    // }
    if (await HasRole("ppp", req.user)) {
      console.log("permitido");
    } else {
      console.log("não permitido");
    }
    res.json(req.user);
  }
};
