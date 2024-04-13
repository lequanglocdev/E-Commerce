const userRouter = require("./user");
const productRouter = require("./product");
const categoryRouter = require('./category')
const blogRouter = require('./blogCategory')
const blog = require('./blog')
const coupon = require('./coupon')
const {notFound,errHandler} = require('../middlewares/errHandler')
const initRoutes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/category", categoryRouter);
  app.use("/api/blogCategory", blogRouter);
  app.use("/api/blog",blog)
  app.use("/api/coupon",coupon)

  app.use(notFound)
  app.use(errHandler)
};

module.exports = initRoutes