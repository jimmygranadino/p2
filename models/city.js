'use strict'
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define('city', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    currencyName: DataTypes.STRING,
    currencyId: DataTypes.INTEGER
  }, {})
  city.associate = function(models) {
    // associations can be defined here
    models.city.belongsTo(models.user)
    models.city.hasMany(models.currency)
  }
  return city
}
