const router = require('express').Router();
const { Bet } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newBet = await Bet.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBet);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const betData = await Bet.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!betData) {
      res.status(404).json({ message: 'No bet found with this id!' });
      return;
    }

    res.status(200).json(betData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
