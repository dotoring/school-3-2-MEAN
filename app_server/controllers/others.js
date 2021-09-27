/* GET home page. */
const about = (req, res) => {
  res.render('index', { title: 'about' });
};

module.exports = {
  about
};
