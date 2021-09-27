/* GET home page. */
const homelist = (req, res) => {
    res.render('index', { title: 'Express 2017250028 윤세원' });
  };
  
const locationInfo = (req, res) => {
    res.render('index', { title: 'Location info' });
  };

const addReview = (req, res) => {
    res.render('index', { title: 'Add review' });
  };

  module.exports = {
    homelist,
    locationInfo,
    addReview
  };
  