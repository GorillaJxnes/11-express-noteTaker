const router = require('express').Router();
const noteGen = require('/api');

router.use('/api', noteGen);

module.exports = router;