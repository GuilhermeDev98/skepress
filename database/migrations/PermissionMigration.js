const Permissions = require("../../src/models/Permission");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Permissions.sync({ force: true });
  },

  down: (queryInterface, Sequelize) => {
    return Permissions.drop();
  }
};
