const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const Model = Sequelize.Model;

class Role extends Model {}
Role.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize,
    modelName: "role"
  }
);

module.exports = Role;
