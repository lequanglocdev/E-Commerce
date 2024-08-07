const {
  generateAccessToken,
  generateRefreshToken,
} = require("../middlewares/jwt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const sendMail = require("../ultils/sendMail")
const crypto = require("crypto")
const maketoken = require("uniqid")

const register = asyncHandler(async (req, res) => {
  const { email, password, firstname, lastname,mobile } = req.body;

  if (!email || !password || !firstname || !lastname || !mobile)
    return res.status(400).json({
      sucess: false,
      mes: "Missing input",

    });
    const token = maketoken()
    res.cookie('dataregister',{...req.body,token},{httpOnly: true,maxAge:15 * 60 * 1000})
    const html =  `Xin vui lòng nhấp vào đường link dưới đây để hoàn tất việc đăng ký. Link này có giới hạn là 15 phút kể từ bây giờ
      <a href=${process.env.URL_SERVER}/api/user/finalregister/${token}>Click here</a>
    `
    await sendMail({email,html,subject:"Hoàn tất đăng ký Digital Word"})
 
    return res.status(200).json({
      sucess: true,
      mes: "Please check your email to active account"
    });
  
});
const finalRegister =asyncHandler (async(req,res) =>{
  const cookie = req.cookies
  const {token} = req.params
  if(!cookie || cookie?.dataregister?.token !== token) {
    res.clearCookie('dataregister')
    return res.redirect(`${process.env.CLIENT_URL}/finalregister/failed`)
  }
    const newUser = await User.create({
          email:cookie?.dataregister?.email,
          password:cookie?.dataregister?.password,
          mobile:cookie?.dataregister?.mobile,
          firstname:cookie?.dataregister?.firstname,
          lastname:cookie?.dataregister?.lastname,
    })
    res.clearCookie('dataregister ')
    if(newUser) return res.redirect(`${process.env.CLIENT_URL}/finalregister/success`)
    else return res.redirect(`${process.env.CLIENT_URL}/finalregister/failed`)
})
//  
// refresh token => cấp mới access token
// access token => xác thục người dùng và cấp quyền cho người dùng
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({
      sucess: false,
      mes: "Missing input",
    });
  const response = await User.findOne({ email });
  if (response && (await response.isCorrectPassword(password))) {
    // Tách password và role ra khỏi response
    const { password, role, refreshToken, ...userData } = response.toObject();

    // Tạo refreshToken  token
    const accessToken = generateAccessToken(response._id, role);
    const newRefreshToken = generateRefreshToken(response._id);
    // Lưu refreshToken vào database
    await User.findByIdAndUpdate(
      response._id,
      { refreshToken: newRefreshToken },
      { new: true }
    );
    // Lưu refreshToken vào cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      sucess: true,
      accessToken,
      userData,
    });
  } else {
    throw new Error("Invalid credentials !");
  }
});

const getCurrent = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id).select("-refreshToken -password -role");
  return res.status(200).json({
    sucess: false,
    res: user ? user : "User not found",
  });
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  // check xem co token hay khong
  if (!cookie && !cookie.refreshToken)
    throw new Error("No refresh token in cookie ");
  // check xen token co hop le hay ko
  const rs = await jwt.verify(cookie.refreshToken, process.env.JWT_SECRET);
  const response = await User.findOne({
    _id: rs._id,
    refreshToken: cookie.refreshToken,
  });
  return res.status(200).json({
    sucess: response ? true : false,
    newAccessToken: response
      ? generateAccessToken(response._id, response.role)
      : "refresh token not matched",
  });
});
const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie || !cookie.refreshToken)
    throw new Error("No refresh  token in cookies");
  // xóa refresh token ở db
  await User.findOneAndUpdate(
    { refreshToken: cookie.refreshToken },
    { refreshToken: "" },
    { new: true }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  return res.status(200).json({
    sucess: true,
    mes: "logout is done",
  });
});

// client gửi email
// server check email có hợp lệ hay ko ==> gửi mail + kem theo link(password change token)
// client check mail => click email
// client gửi api kem token
// check token có giống với token mà server gửi mail hay ko
// change password

const forgetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) throw new Error("Missing email");
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const resetToken = user.createChangePassword();
  await user.save();

  const html =  `Xin vui lòng click vào link dưới đây để thay đổi mật khẩu của bạn.Link này sẽ hết hạn sau 15 phút kể từ bây giờ. <a href=${process.env.CLIENT_URL}/reset-password/${resetToken}>Click here</a>`


  const data = {
     email,
      html,
      subject: "forgot password"
  }
  const rs  = await sendMail(data)
  return res.status(200).json({
    sucess: true,
    rs
  })
});

const resetPassword = asyncHandler(async(req,res)=>{
  const {password,token} = req.body
  if(!password || !token) throw new Error("Missing inputs")
  const passwordResetToken = crypto.createHash('sha256').update(token).digest('hex')
  const user = await User.findOne({passwordResetToken,passwordResetExpires:{$gt:Date.now()}})
  if(!user) throw new Error("Invalid reset token")
  user.password = password
  user.passwordResetToken = undefined
  user.passwordChangedAt = Date.now()
  user.passwordResetExpires = undefined
  await user.save()
  return res.status(200).json({
    sucess: user ? true : false,
    mes: user ? 'Updated password' : 'Something went wrong'
  })
})

const getAllUser = asyncHandler(async (req, res) => {
  const response = await User.find().select("-refreshToken -password -role");
  return res.status(200).json({
    sucess: response ? true : false,
    users: response,
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { _id } = req.query;
  if (!_id) throw new Error("Missing inputs");
  const response = await User.findByIdAndDelete(_id);
  return res.status(200).json({
    sucess: response ? true : false,
    deleteUsers: response
      ? `User width email ${response.email} delete`
      : "No user delete",
  });
});

const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  if (!_id || Object.keys(req.body).length === 0)
    throw new Error("Missing inputs");
  const response = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  }).select("-password -role");
  return res.status(200).json({
    sucess: response ? true : false,
    updateUsers: response ? response : "Some thing went wrong",
  });
});

const updateUserByAdmin = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  if (Object.keys(req.body).length === 0) throw new Error("Missing input");
  const response = await User.findByIdAndUpdate(uid, req.body, {
    new: true,
  }).select("-password -role");
  return res.status(200).json({
    sucess: response ? true : false,
    updateUser: response ? response : "Some thing went wrong",
  });
});

const updateUserAddress = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  if (!req.body.address) throw new Error("Missing input");
  const response = await User.findByIdAndUpdate(
    _id,
    { $push: { address: req.body.address } },
    { new: true }
  ).select("-password -role -refreshToken");
  return res.status(200).json({
    sucess: response ? true : false,
    updateUser: response ? response :' Some thing went wrong'
  })
});
module.exports = {
  register,
  finalRegister,
  login,
  getCurrent,
  refreshAccessToken,
  logout,
  forgetPassword,
  resetPassword,
  getAllUser,
  deleteUser,
  updateUser,
  updateUserByAdmin,
  updateUserAddress
};
