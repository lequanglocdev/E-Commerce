const { response } = require("express");
const Blog = require("../models/blog");
const asyncHandler = require("express-async-handler");

const createBlog = asyncHandler(async (req, res) => {
  const { title, description, category } = req.body;
  if ((!title, !description, !category)) throw new Error("Missing inputs");
  const response = await Blog.create(req.body);
  return res.json({
    sucess: response ? true : false,
    createBlog: response ? response : "Can not create new blog",
  });
});

const getBlogs = asyncHandler(async (req, res) => {
  const response = await Blog.find();
  return res.json({
    sucess: response ? true : false,
    getBlog: response ? response : "Can not get blog",
  });
});

const updateBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  if (Object.keys(req.body).length === 0) throw new Error("Missing input");
  const response = await Blog.findByIdAndUpdate(bid, req.body, { new: true });
  return res.json({
    sucess: response ? true : false,
    updateBlog: response ? response : "Can not get update",
  });
});

/**
 * khi người dùng like một bài blog
 *
 *  Trường hợp nhấn nut like
 *      - kiểm tra xem trước đó có dislike ko. Nếu có thì hủy dislike
 *      - kiểm tra xem trước đó có like ko . Nếu có thì bỏ like hoặc thêm like
 *
 */
const likeBlog = asyncHandler(async (req, res) => {
  // lấy id người like
  const { _id } = req.user;
  // lấy id blog
  const { bid } = req.params;
  if (!bid) throw new Error("missing input");
  const blog = await Blog.findById(bid);
  const alreadyDislike = blog?.dislikes?.find((el) => el.toString() === _id);
  if (alreadyDislike) {
    const response = await Blog.findByIdAndUpdate(
      bid,
      { $pull: { dislikes: _id } },
      { new: true }
    );
    return res.json({
      sucess: response ? true : false,
      rs: response,
    });
  }
  const isLiked = blog?.likes?.find((el) => el.toString() === _id);
  if (isLiked) {
    const response = await Blog.findByIdAndUpdate(
      bid,
      { $pull: { likes: _id } },
      { new: true }
    );
    return res.json({
      sucess: response ? true : false,
      rs: response,
    });
  } else {
    const response = await Blog.findByIdAndUpdate(
      bid,
      { $push: { likes: _id } },
      { new: true }
    );
    return res.json({
      sucess: response ? true : false,
      rs: response,
    });
  }
});
const disLikeBlog = asyncHandler(async (req, res) => {
  // lấy id người like
  const { _id } = req.user;
  // lấy id blog
  const { bid } = req.params;
  if (!bid) throw new Error("missing input");
  const blog = await Blog.findById(bid);
  const alreadylike = blog?.likes?.find((el) => el.toString() === _id);
  if (alreadylike) {
    const response = await Blog.findByIdAndUpdate(
      bid,
      {
        $pull: { likes: _id },
      },
      { new: true }
    );
    return res.json({
      sucess: response ? true : false,
      rs: response,
    });
  }
  const isDiskLiked = blog?.dislikes?.find((el) => el.toString() === _id);
  if (isDiskLiked) {
    const response = await Blog.findByIdAndUpdate(
      bid,
      { $pull: { dislikes: _id } },
      { new: true }
    );
    return res.json({
      sucess: response ? true : false,
      rs: response,
    });
  } else {
    const response = await Blog.findByIdAndUpdate(
      bid,
      { $push: { dislikes: _id } },
      { new: true }
    );
    return res.json({
      sucess: response ? true : false,
      rs: response,
    });
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  const blog = await Blog.findByIdAndUpdate(
    bid,
    { $inc: { numberViews: 1 } },
    { new: true }
  )
    // { $inc: { numberViews: 1 } },{ new: true }
    .populate("likes", "firstname lastname")
    .populate("dislikes", "firstname lastname");
  return res.json({
    sucess: blog ? true : false,
    rs: blog,
  });
});
const deleteBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  const blog = await Blog.findByIdAndDelete(bid);
  return res.json({
    sucess: blog ? true : false,
    deletedBog: blog || "Something went wrong",
  });
});
const uploadImagesBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  if (!req.file) throw new Error("Missing input");
  const response = await Blog.findByIdAndUpdate(
    bid,
    { image:req.file.path},
    { new: true }
  );
  return res.status(200).json({
    status: response ? true : false,
    uploadImageBlog: response ? response : "Can not get upload blog",
  });
});
module.exports = {
  createBlog,
  getBlogs,
  updateBlog,
  likeBlog,
  disLikeBlog,
  getBlog,
  deleteBlog,
  uploadImagesBlog
};
