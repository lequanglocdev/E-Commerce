const router = require("express").Router();
const insertProduct = require("../controllers/insertData");

router.post("/",insertProduct.insertProduct);
router.post("/cate",insertProduct.insertCategory);


module.exports = router;
