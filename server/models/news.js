"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class news extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      news.hasMany(models.newsDetail, {
        foreignKey: "news_id",
      });
    }
  }
  news.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.TEXT,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "news",
      tableName: "news",
      underscored: true,
    }
  );
  return news;
};
