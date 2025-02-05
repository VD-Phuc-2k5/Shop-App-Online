"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class newsDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      newsDetail.belongsTo(models.product, {
        foreignKey: "product_id",
      });

      newsDetail.belongsTo(models.news, {
        foreignKey: "news_id",
      });
    }
  }
  newsDetail.init(
    {
      product_id: DataTypes.INTEGER,
      news_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "newsDetail",
      tableName: "news_details",
      underscored: true,
    }
  );
  return newsDetail;
};
