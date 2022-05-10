const sequelize = require('../config/connection');
const { User, League, Match} = require('../models');

const userData = require('./userData.json');
const matchData = require('./matchData.json');
const leagueData = require('./leagueData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await League.bulkCreate(leagueData, {
    individualHooks: true,
    returning: true,
  });
  await Match.bulkCreate(matchData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
