const User = require('./User');
const Match = require('./Match');
const Bet = require('./Bet');
const League = require('./League');

User.hasMany(Bet, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Bet.belongsTo(User, {
  foreignKey: 'user_id',
});
Match.hasMany(Bet, {
  foreignKey: 'match_id',
});

Bet.belongsTo(Match, {
  foreignKey: 'match_id',
});
League.hasMany(Match, {
  foreignKey: 'league_id',
});

Match.belongsTo(League, {
  foreignKey: 'league_id',
});

module.exports = {User, Bet, Match, League};
