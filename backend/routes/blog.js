const router = require("express").Router();
const blog = require("../controllers/blog");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");
const uploader = require("../config/cloudinary.config")

router.post("/", [verifyAccessToken, isAdmin], blog.createBlog);
router.get("/", blog.getBlogs);
router.get("/one/:bid", blog.getBlog);
router.put("/likes/:bid", [verifyAccessToken], blog.likeBlog);
router.put("/image/:bid", [verifyAccessToken,isAdmin],uploader.single('image'), blog.uploadImagesBlog);
router.put("/dislike/:bid", [verifyAccessToken], blog.disLikeBlog);
router.put("/:bid", [verifyAccessToken, isAdmin], blog.updateBlog);
router.delete("/:bid", [verifyAccessToken, isAdmin], blog.deleteBlog);

module.exports = router;
