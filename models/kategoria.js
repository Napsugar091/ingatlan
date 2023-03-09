'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kategoria.init({
    nev: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Kategoria',
    tableName: 'Kategoriak',
    timestamps: false
  });
  Kategoria.associate = function (models) {
    Kategoria.hasMany(models.Ingatlan, {
      foreignKey: 'kategoria'
    })
  };
  return Kategoria;
};