const router = require('express').Router();
const userRoutes = require('./userRoutes');
const betRoutes = require('./betRoutes');

router.use('/users', userRoutes);
router.use('/bet', betRoutes);

module.exports = router;
