const Roles = require("../../src/models/Role");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Roles.sync({ force: true });
  },

  down: (queryInterface, Sequelize) => {
    return Roles.drop();
  }
};
