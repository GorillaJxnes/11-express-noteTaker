const router = require('express').Router();
const noteGen = require('./noteGen');

router.use('/notes', noteGen);

module.exports = router;