
const BlogCategory = require("../models/blogCategory");
const asyncHandler = require("express-async-handler");

const createBlogCategory = asyncHandler(async (req, res) => {
  const response = await BlogCategory.create(req.body);
  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot create new blog",
  });
});
const getBlogCategory = asyncHandler(async (req, res) => {
  const response = await BlogCategory.find().select("title _id");
  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot create new blog",
  });
});
const updateBlogCategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;
  const response = await BlogCategory.findByIdAndUpdate(pcid, req.body);
  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot update new blog",
  });
});

const deleteBlogCategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;

  const response = await BlogCategory.findByIdAndDelete(pcid);

  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot delete new blog",
  });
});
module.exports = {
  createBlogCategory,
  getBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
};
