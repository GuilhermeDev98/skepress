const Users = require("../../src/models/User");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Users.sync({ force: true });
  },

  down: (queryInterface, Sequelize) => {
    return Users.drop();
  }
};
