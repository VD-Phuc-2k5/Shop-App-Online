"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orderDetail.belongsTo(models.order, {
        foreignKey: "order_id",
      });

      orderDetail.belongsTo(models.product, {
        foreignKey: "product_id",
      });
    }
  }
  orderDetail.init(
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orderDetail",
      tableName: "order_details",
      underscored: true,
    }
  );
  return orderDetail;
};
