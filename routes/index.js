const router = require('express').Router();

const apiRoutes = require('./apiRoutes')

router.use('/api', apiRoutes);
router.use((req, res) => {
    return res.status(404).send('Error! Not Found!!!');
});

module.exports = router;