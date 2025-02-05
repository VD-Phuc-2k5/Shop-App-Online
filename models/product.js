"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.brand, {
        foreignKey: "brand_id",
      });

      product.belongsTo(models.category, {
        foreignKey: "category_id",
      });

      product.hasMany(models.orderDetail, {
        foreignKey: "product_id",
      });

      product.hasMany(models.bannerDetail, {
        foreignKey: "product_id",
      });

      product.hasMany(models.feedback, {
        foreignKey: "product_id",
      });

      product.hasMany(models.newsDetail, {
        foreignKey: "product_id",
      });
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      oldprice: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      specification: DataTypes.TEXT,
      buyturn: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      brand_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
      tableName: "products",
      underscored: true,
    }
  );
  return product;
};
