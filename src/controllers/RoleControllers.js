const User = require("../models/User");
const HasPemission = require("../utils/HasPemission");

module.exports = {
  async store(req, res) {
    HasPemission("role_store", req);
    res.json(req);
  }
};
