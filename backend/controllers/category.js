const Category = require("../models/category");
const asyncHandler = require("express-async-handler");

const createCategory = asyncHandler(async (req, res) => {
  const response = await Category.create(req.body);
  return res.json({
    success: response ? true : false,
    createCategory: response ? response : "Cannot create new product",
  });
});
const getCategory = asyncHandler(async (req, res) => {
  const response = await Category.find();
  return res.json({
    success: response ? true : false,
    createCategory: response ? response : "Cannot create new product",
  });
});
const updateCategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;
  const response = await Category.findByIdAndUpdate(pcid, req.body);
  return res.json({
    success: response ? true : false,
    createCategory: response ? response : "Cannot update new product",
  });
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;

  const response = await Category.findByIdAndDelete(pcid);

  return res.json({
    success: response ? true : false,
    createCategory: response ? response : "Cannot delete new product",
  });
});
module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
