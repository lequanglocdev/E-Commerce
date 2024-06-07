const router = require("express").Router();
const couponController = require("../controllers/coupon");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", [verifyAccessToken, isAdmin], couponController.createNewCoupon);
router.get("/", couponController.getCoupon);
router.put("/:cid", [verifyAccessToken], couponController.upadteCoupon);
router.delete("/:cid", [verifyAccessToken, isAdmin], couponController.deleteCoupon);


module.exports = router;
