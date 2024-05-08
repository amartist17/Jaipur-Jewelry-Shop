const Jewellery = require("../models/jeweleryModel");

exports.home = async (req, res, next) => {
  // let obj = {
    
  //   "name": "Bracelet 3",
  //   "description": "<p>Elegant rose gold bracelet</p><ul><li>Water-resistant fabric with soft lycra detailing inside</li><li>Clean zip-front, and three-piece hood</li><li>Subtle branding and diagonal panel detail</li></ul>",
  //   "material": "Rose Gold",
  //   "price": 1200,
  //   "discountedPrice": 1100,
    
  //   "images": [
  //     "https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
  //   ],
  //   "category": "bracelets",
  //   "isAvailable": true,
    
  // }
  // let newdoc = await Jewellery.create(obj);
  res.status(200).render("index");

};

exports.contact = async (req, res, next) => {
  res.status(200).render("contact");
};

exports.about = async (req, res, next) => {
  res.status(200).render("about");
};

exports.shop = async (req, res, next) => {
  let items = Jewellery.find({"isAvailable": true});
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    items = await items.sort(sortBy);
    // return this;
  } else {
    items = await items.sort('discountedPrice');
    // return this;
  }
  res.status(200).render("shop", {items});
};

exports.product = async (req, res, next) => {
  let product = await Jewellery.findById(req.params.id);
  res.status(200).render('product',{product});
};

exports.login = async (req, res, next) => {
  res.status(200).render('login');
};

exports.blogs = async (req, res, next) => {
  res.status(200).render("blogs");
};