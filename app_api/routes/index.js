const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations')
const ctrlReviews = require('../controllers/reviews')

router
    .route('/locations')
    .get(ctrlLocations.locationsListByDistance)
    .post(ctrlLocations.locationsCreate);
router
    .route('/locations/:locationid')
    .get(ctrlLocations.locationsReadOne)
    .put(ctrlLocations.locationsUpdateOne)
    .delete(ctrlLocations.locationsDeleteOne);

router
    .route('/locations/:locationid/reviews')
    .post(ctrlReviews.ReviewsCreate);
router
    .route('/locations/:locationid/reviews/:reviewid')
    .get(ctrlReviews.ReviewsReadOne)
    .put(ctrlReviews.ReviewsUpdateOne)
    .delete(ctrlReviews.ReviewsDeleteOne);

module.exports = router;
