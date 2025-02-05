"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bannerDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bannerDetail.belongsTo(models.product, {
        foreignKey: "product_id",
      });

      bannerDetail.belongsTo(models.banner, {
        foreignKey: "banner_id",
      });
    }
  }
  bannerDetail.init(
    {
      product_id: DataTypes.INTEGER,
      banner_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bannerDetail",
      tableName: "banner_details",
      underscored: true,
    }
  );
  return bannerDetail;
};
