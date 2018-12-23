// Import routes

__REQUIRES__
const express = require('express')
const router = express.Router()

/** GET / - Check service health */
router.get('/api', (req, res) =>
  res.send('OK man')
);

__ROUTES__


module.exports = router

