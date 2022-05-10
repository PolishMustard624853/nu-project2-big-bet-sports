const User = require('./User');
const Match = require('./Match');
const Bet = require('./Bet');
const League = require('./League');

User.hasMany(Bet, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Bet.belongsTo(User);
Match.hasMany(Bet, {
  foreignKey: 'match_id',
});

Bet.belongsTo(Match);
League.hasMany(Match, {
  foreignKey: 'league_id',
});

Match.belongsTo(League);

module.exports = {User, Bet, Match, League};
