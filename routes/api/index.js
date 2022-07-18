const router = require('express').Router();
const noteGen = require('/noteGen');

router.use('/noteGen', noteGen);

module.exports = router;