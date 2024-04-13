const router = require("express").Router();
const brandController = require("../controllers/brand");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post(
  "/",
  [verifyAccessToken, isAdmin],
  brandController.createBrandCategory
);
router.get("/", brandController.getBrandCategory);
router.put(
  "/:pcid",
  [verifyAccessToken, isAdmin],
  brandController.updateBrandCategory
);
router.delete(
  "/:pcid",
  [verifyAccessToken, isAdmin],
  brandController.deleteBrandCategory
);

module.exports = router;
