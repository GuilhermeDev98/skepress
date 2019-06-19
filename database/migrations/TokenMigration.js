const Token = require("../../src/models/Token");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Token.sync({ force: true });
  },

  down: (queryInterface, Sequelize) => {
    return Token.drop();
  }
};
