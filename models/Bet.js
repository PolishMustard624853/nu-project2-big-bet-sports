const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bet extends Model {}

Bet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    match_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matches',
        key: 'id',
      },
    },
    choice: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bets',
  }
);

module.exports = Bet;
