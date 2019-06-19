const sequelize = require("../config/database");
const Model = sequelize.Sequelize.Model;
const Role = require("../models/Role");

class Permission extends Model {}
Permission.init(
  {
    name: {
      type: sequelize.Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: sequelize.Sequelize.STRING
    }
  },
  {
    sequelize,
    modelName: "permission"
  }
);

Role.hasMany(Permission);
Permission.belongsTo(Role);

module.exports = Permission;
