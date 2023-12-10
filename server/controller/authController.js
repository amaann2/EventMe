const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../model/userModel");
const AppError = require("../utils/appError");

exports.signUp = catchAsyncError(async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json({
    status: "success",
    user,
  });
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please Provide Email and Password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.comparePassword(password, user.password))) {
    return next(new AppError("Incorrect Email and Password", 404));
  }

  res.status(200).json({
    status: "Success",
    user,
  });
});

