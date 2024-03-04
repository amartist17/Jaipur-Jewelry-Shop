const express = require("express");
const viewController = require('../controllers/viewController')
const router = express.Router({ mergeParams: true });

router.get("/", viewController.home);
router.get("/about", viewController.about);
router.get("/contact", viewController.contact);
router.get("/shop", viewController.shop);
router.get("/blogs", viewController.blogs);
router.get("/login", viewController.login);



module.exports = router;
