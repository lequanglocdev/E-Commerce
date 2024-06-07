const { response } = require("express");
const Coupon = require("../models/coupon");
const asyncHandler = require("express-async-handler");

const createNewCoupon = asyncHandler(async (req, res) => {
  const { name, discount, expiry } = req.body;
  if ((!name || !discount || !expiry)) throw new Error("Missing inputs");
  const response = await Coupon.create({
    ...req.body,
    expiry: Date.now() + +expiry * 24 * 60 * 60 * 1000,
  });
  return res.json({
    sucess: response ? true : false,
    createCoupon: response ? response : "Can not create new blog",
  });
});

const getCoupon = asyncHandler(async (req, res) => {
  const response = await Coupon.find().select('-createdAt -updatedAt');

  return res.json({
    sucess: response ? true : false,
    getCoupon: response ? response : "Can not get coupon",
  });
});

const upadteCoupon = asyncHandler(async (req, res) => {
  const {cid } = req.params;
  if (Object.keys(req.body).length === 0) throw new Error("Missing inputs");
  if(req.body.expiry) req.body.expiry = Date.now() + +req.body.expiry * 24 * 60 * 60 * 1000
  const response = await Coupon.findByIdAndUpdate(cid,req.body,{new:true})
  return res.json({
    sucess: response ? true : false,
    updateCoupon: response ? response : "Can not update new blog",
  });
});

const deleteCoupon = asyncHandler(async(req,res)=>{
  const {cid}  = req.params
  const response = await Coupon.findByIdAndDelete(cid)
  return res.json({
    sucess: response ? true : false,
    deleteCoupon: response ? response : "Can not delete new blog"
  })
})
module.exports = {
  createNewCoupon,
  getCoupon,
  upadteCoupon,
  deleteCoupon
};
