"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      banner.hasMany(models.bannerDetail, {
        foreignKey: "banner_id",
      });
    }
  }
  banner.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.TEXT,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "banner",
      tableName: "banners",
      underscored: true,
    }
  );
  return banner;
};
