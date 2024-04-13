const { response } = require("express");
const Product = require("../models/product");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const createProduct = asyncHandler(async (req, res) => {
  if (Object.keys(req.body).length === 0) throw new Error("Missing input");
  if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
  const newProduct = await Product.create(req.body);
  return res.status(200).json({
    success: newProduct ? true : false,
    createProduct: newProduct ? newProduct : "Cannot create new product",
  });
});

const getProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  const product = await Product.findById(pid);
  return res.status(200).json({
    success: product ? true : false,
    productData: product ? product : "Can not get Product",
  });
});

// Filtering , sorting & pagination

const getProducts = asyncHandler(async (req, res) => {
  // Xóa các trường đặc biệt ra khỏi query khi client gửi lên
  const queries = { ...req.query };
  const excludeFields = ["limit", "sort", "page", "fields"];
  excludeFields.forEach((el) => delete queries[el]);

  // Format lại các operators cho đúng cú pháp cua mgongo
  let queryString = JSON.stringify(queries);
  queryString.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);
  const formatedQueries = JSON.parse(queryString);
  console.log(formatedQueries);

  // Fillter
  if (queries?.title)
    formatedQueries.title = { $regex: queries.title, $options: "i" };
  let queryCommand = Product.find(formatedQueries);

  // sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.sql(",").join(" ");
    queryCommand = queryCommand.sort(sortBy);
  }

  //fields limiting
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    queryCommand = queryCommand.select(fields);
  }

  const page = +req.query.page || 1;
  const limit = +req.query.limit || process.env.LIMIT_PRODUCTS;
  const skip = (page - 1) * limit;
  queryCommand.skip(skip).limit(limit);

  // số lượng sp thõa đk !== số lưởng sp trả về
  // queryCommand.exec(async (err, response) => {
  //   if (err) throw new Error(err.message);
  //   const count = await Product.find(formatedQueries).countDocuments();

  //   return res.status(200).json({
  //     success: response ? true : false,
  //     productData: response ? response : "Can not get Product",
  //     count,
  //   });
  // });

  try {
    const response = await queryCommand; // Assuming queryCommand is a Promise
    const count = await Product.find(formatedQueries).countDocuments();

    return res.status(200).json({
      success: response ? true : false,
      productData: response ? response : "Can not get Product",
      count,
    });
  } catch (err) {
    throw new Error(err.message); // You can customize how you handle the error here
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
  const updateProduct = await Product.findByIdAndUpdate(pid, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: updateProduct ? true : false,
    updateProduct: updateProduct ? updateProduct : "Can not update Product",
  });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(pid);
  return res.status(200).json({
    success: deleteProduct ? true : false,
    deleteProduct: deleteProduct ? deleteProduct : "Can not delete product",
  });
});

// bình luận
const ratings = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, comment, pid } = req.body;
  if (!star || !pid) throw new Error("Missing input");
  //
  const productRating = await Product.findById(pid);
  const alreadyRating = productRating?.ratings?.some(
    (el) => el.postedBy.toString() === _id
  );

  // console.log(alreadyRating);
  if (alreadyRating) {
    // updata start
    await Product.updateOne(
      {
        ratings: { $elemMatch: alreadyRating },
      },
      {
        $set: { "ratings.$.star": star, "ratings.$.comment": comment },
      },
      { new: true }
    );
  } else {
    // add star && comment
    const response = await Product.findByIdAndUpdate(
      pid,
      {
        $push: { ratings: { star, comment, postedBy: _id } },
      },
      { new: true }
    );
    console.log(response);
  }

  // sum rating
  const updatedProduct = await Product.findById(pid);
  const ratingCount = updatedProduct.ratings.length;
  const sumRating = updatedProduct.ratings.reduce((sum, el) => {
    sum + +el.star;
  }, 0);
  updateProduct.totalRatings = Math.round((sumRating * 10) / ratingCount) / 10;

  await updateProduct.save();

  return res.status(200).json({
    status: true,
    updateProduct,
  });
});

const uploadImagesProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  if (!req.file) throw new Error("Missing input");
  const response = await Product.findByIdAndUpdate(
    pid,
    { $push: { images: { $each: req.fields.map((el) => el.path) } } },
    { new: true }
  );
  return res.status(200).json({
    status: response ? true : false,
    uploadImageProduct: response ? response : "Can not get upload",
  });
});
module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  ratings,
  uploadImagesProduct,
};
