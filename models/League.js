const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Match = require('./Match');

class League extends Model { }

League.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'leagues',
  }
);

League.hasMany(Match, {
  foreignKey: 'league_id',
});

Match.belongsTo(League, {
  foreignKey: 'league_id',
});

module.exports = League;