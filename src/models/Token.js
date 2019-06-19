const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const Model = Sequelize.Model;
const User = require("../models/User");

class Token extends Model {}
Token.init(
  {
    token: {
      type: Sequelize.STRING
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id"
      }
    }
  },
  {
    sequelize,
    modelName: "token"
    // options
  }
);

module.exports = Token;
