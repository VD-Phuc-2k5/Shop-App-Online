"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      feedback.belongsTo(models.product, {
        foreignKey: "product_id",
      });

      feedback.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  feedback.init(
    {
      product_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      star: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "feedback",
      tableName: "feedbacks",
    }
  );
  return feedback;
};
