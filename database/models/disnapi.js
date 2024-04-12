'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class disnapi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  disnapi.init({
    name: DataTypes.STRING,
    fileName: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'disnapi',
  });
  return disnapi;
};