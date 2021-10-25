const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations')
const ctrlOthers = require('../controllers/others')

router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* GET home page. */
router.get('/about', ctrlOthers.about);

module.exports = router;
