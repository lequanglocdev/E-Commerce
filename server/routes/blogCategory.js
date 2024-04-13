const router = require("express").Router();
const caterogyController = require("../controllers/blogCategory");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post(
  "/",
  [verifyAccessToken, isAdmin],
  caterogyController.createBlogCategory
);
router.get("/", caterogyController.getBlogCategory);
router.put(
  "/:pcid",
  [verifyAccessToken, isAdmin],
  caterogyController.updateBlogCategory
);
router.delete(
  "/:pcid",
  [verifyAccessToken, isAdmin],
  caterogyController.deleteBlogCategory
);

module.exports = router;
