const router = require("express").Router();
const caterogyController = require("../controllers/blog");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post(
  "/",
  [verifyAccessToken, isAdmin],
  caterogyController.createBlog
);
router.get("/", caterogyController.getBlog);
router.put(
  "/:pcid",
  [verifyAccessToken, isAdmin],
  caterogyController.updateBlog
);
router.delete(
  "/:pcid",
  [verifyAccessToken, isAdmin],
  caterogyController.deleteBlog
);

module.exports = router;
