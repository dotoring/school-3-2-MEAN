const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations')
const ctrlReviews = require('../controllers/reviews')

router
    .route('/locatins')
    .get(ctrlLocations.locationsListByDistance)
    .post(ctrlLocations.locationsCreate);
router
    .route('/locatins/:locationid')
    .get(ctrlLocations.locationsReadOne)
    .post(ctrlLocations.locationsUpdateOne)
    .delete(ctrlLocations.locationsDeleteOne);

router
    .route('/locatins/:locationid/reviews')
    .post(ctrlReviews.ReviewsCreate);
router
    .route('/locatins/:locationid/reviews/:reviewid')
    .get(ctrlReviews.ReviewsReadOne)
    .put(ctrlReviews.ReviewsUpdateOne)
    .delete(ctrlReviews.ReviewsDeleteOne);

module.exports = router;
