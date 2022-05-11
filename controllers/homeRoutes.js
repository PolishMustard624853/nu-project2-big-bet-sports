const router = require('express').Router();
const { User, League, Match, Bet } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all leagues
    const leagueData = await League.findAll();

    // Serialize league data so the template can read it
    const leagues = leagueData.map((league) => league.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('leagues', {
      leagues,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/league/:id', withAuth, async (req, res) => {
  try {
    const matchesData = await League.findByPk(req.params.id, {
      include: [
        {
          model: Match,
        },
      ],
    });

    const matches = matchesData.get({ plain: true });

    res.render('matches', {
      ...matches,
      // matches,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/match/:id', withAuth, async (req, res) => {
  try {
    const matchData = await Match.findByPk(req.params.id);

    const match = matchData.get({ plain: true });
    console.log(match);
    res.render('match', {
      ...match,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      // raw: true,
      // nest: true,
      attributes: { exclude: ['password'] },
      // add in match and league?
      include: [
        {
          model: Bet,
          include: [{ model: Match }],
        },
      ],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('dashboard', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
