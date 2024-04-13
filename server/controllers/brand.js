const BrandCategory = require("../models/brand");
const asyncHandler = require("express-async-handler");

const createBrandCategory = asyncHandler(async (req, res) => {
  const response = await BrandCategory.create(req.body);
  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot create new brand",
  });
});
const getBrandCategory = asyncHandler(async (req, res) => {
  const response = await BrandCategory.find()
  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot create new brand",
  });
});
const updateBrandCategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;
  const response = await BrandCategory.findByIdAndUpdate(pcid, req.body);
  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot update new brand",
  });
});

const deleteBrandCategory = asyncHandler(async (req, res) => {
  const { pcid } = req.params;

  const response = await BrandCategory.findByIdAndDelete(pcid);

  return res.json({
    success: response ? true : false,
    createBlog: response ? response : "Cannot delete new brand",
  });
});
module.exports = {
  createBrandCategory,
  getBrandCategory,
  updateBrandCategory,
  deleteBrandCategory,
};
