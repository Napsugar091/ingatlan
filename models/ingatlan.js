'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingatlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingatlan.init({
    kategoria: {type: DataTypes.INTEGER, allowNull: false},
    leiras: DataTypes.STRING,
    hirdetesDatuma: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.DATE.NOW},
    tehermentes: {type: DataTypes.BOOLEAN, allowNull: false},
    ar: {type: DataTypes.INTEGER, allowNull: false},
    kepUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingatlan',
    tableName: "ingatlanok",
    timestamps: false
  });
  Ingatlan.associate = function (models) {
    Ingatlan.belongsTo(models.Kategoria, {
      foreignKey: 'kategoria'
    })
  };
  return Ingatlan;
};