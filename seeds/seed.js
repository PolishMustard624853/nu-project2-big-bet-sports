const sequelize = require('../config/connection');
const { Bet, User, League, Match} = require('../models');

const userData = require('./userData.json');
const matchData = require('./matchData.json');
const leagueData = require('./leagueData.json');
const betData = require('./betData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    returning: true,
  });
  await League.bulkCreate(leagueData, {
    returning: true,
  });
  await Match.bulkCreate(matchData, {
    returning: true,
  });
  await Bet.bulkCreate(betData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
