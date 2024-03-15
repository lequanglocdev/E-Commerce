const router = require("express").Router();
const caterogyController = require("../controllers/category");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post(
  "/",
  [verifyAccessToken, isAdmin],
  caterogyController.createCategory
);
router.get("/", caterogyController.getCategory);
router.put(
  "/:pcid",
  [verifyAccessToken, isAdmin],
  caterogyController.updateCategory
);
router.delete(
  "/:pcid",
  [verifyAccessToken, isAdmin],
  caterogyController.deleteCategory
);

module.exports = router;
