'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  addresses.init({
    zipCode: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    neighbour: DataTypes.STRING,
    complement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addresses',
    underscored: true,
  });
  return addresses;
};