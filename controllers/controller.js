
const blogController = function (req, res) {
  res.json({
    message:'Welcome to my blog',
  });
};

const profileController = function (req, res) {
  res.json({
    data: '--Profile: Sohel Rana Rony.Web Developer',
  });
};

module.exports = { blogController, profileController };