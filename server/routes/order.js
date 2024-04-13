const router = require("express").Router();
const orderController = require("../controllers/order");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", [verifyAccessToken, isAdmin], orderController.createOrder);
router.put("/status", verifyAccessToken,isAdmin,orderController.updateStatus);
router.get("/", verifyAccessToken,orderController.getUserOrder);
router.get("/admin", verifyAccessToken,isAdmin,orderController.getOrders);



module.exports = router;
