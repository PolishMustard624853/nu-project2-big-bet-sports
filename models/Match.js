const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Match extends Model { }

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    home_team: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    away_team: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    league_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'leagues',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'matches',
  }
);

module.exports = Match;