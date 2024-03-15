const Blog = require("../models/blog");
const asyncHandler = require("express-async-handler");

const createBlog = asyncHandler(async (req, res) => {
  const response = await Blog.create(req.body);
  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot create new blog",
  });
});
const getBlog = asyncHandler(async (req, res) => {
  const response = await Blog.find().select("title _id");
  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot create new blog",
  });
});
const updateBlog = asyncHandler(async (req, res) => {
  const { pcid } = req.params;
  const response = await Blog.findByIdAndUpdate(pcid, req.body);
  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot update new blog",
  });
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { pcid } = req.params;

  const response = await Blog.findByIdAndDelete(pcid);

  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot delete new blog",
  });
});
module.exports = {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};
