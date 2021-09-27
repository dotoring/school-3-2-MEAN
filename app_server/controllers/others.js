/* GET home page. */
const index = (req, res) => {
  res.render('index', { title: 'Express 2017250028 윤세원' });
};

module.exports = {
  index
};
