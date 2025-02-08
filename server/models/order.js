"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.User, {
        foreignKey: "user_id",
      });

      order.hasMany(models.orderDetail, {
        foreignKey: "order_id",
      });
    }
  }
  order.init(
    {
      user_id: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
      tableName: "orders",
      underscored: true,
    }
  );
  return order;
};
