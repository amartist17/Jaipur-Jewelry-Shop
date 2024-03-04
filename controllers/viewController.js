exports.home = async (req, res, next) => {
  res.status(200).render("index");
};

exports.contact = async (req, res, next) => {
  res.status(200).render("contact");
};

exports.about = async (req, res, next) => {
  res.status(200).render("about");
};

exports.shop = async (req, res, next) => {
  res.status(200).render("shop");
};
exports.login = async (req, res, next) => {
  res.status(200).render('login');
};

exports.blogs = async (req, res, next) => {
  res.status(200).render("blogs");
};