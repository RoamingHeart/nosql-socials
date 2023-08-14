const router = require('express').Router();

//import user and thought path routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;