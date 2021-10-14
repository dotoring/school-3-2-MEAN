const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const ReviewsCreate = (req, res) => {};
const ReviewsReadOne = (req, res) => {};
const ReviewsUpdateOne = (req, res) => {};
const ReviewsDeleteOne = (req, res) => {};

  module.exports = {
    ReviewsCreate,
    ReviewsReadOne,
    ReviewsUpdateOne,
    ReviewsDeleteOne
  };
  