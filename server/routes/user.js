const router = require("express").Router();
const userController = require("../controllers/user");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/current", verifyAccessToken, userController.getCurrent);
router.post("/refreshtoken", userController.refreshAccessToken);
router.get("/logout", userController.logout);
router.get("/forgetPassword", userController.forgetPassword);

router.get("/all", [verifyAccessToken, isAdmin], userController.getAllUser);
router.delete(
  "/delete",
  [verifyAccessToken, isAdmin],
  userController.deleteUser
);
router.delete(
  "/update",
  [verifyAccessToken, isAdmin],
  userController.updateUser
);
router.put("/address",[verifyAccessToken],userController.updateUserAddress);
module.exports = router;
