'use strict'
module.exports = (sequelize, DataTypes) => {
  const currency = sequelize.define('currency', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    cityId: DataTypes.INTEGER
  }, {})
  currency.associate = function(models) {
    // associations can be defined here
    models.currency.belongsTo(models.city)
  }
  return currency
}
