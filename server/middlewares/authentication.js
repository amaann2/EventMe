const AppError = require("../utils/appError");
const catchAsyncError = require("./catchAsyncError");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

exports.isAuthenticate = catchAsyncError(async (req, res, next) => {
  let token;
  if (req.headers.cookie) {
    const cookies = req.headers.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "jsonwebtoken") {
        token = value;
        break;
      }
    }
  }
  if (!token) {
    return next(
      new AppError("you are not logged in ! please log in to access", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError("The user belong to this token does no longer exists", 401)
    );
  }
  req.user = currentUser;
  next();
});

exports.isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("you do not have permission to perform this action", 403)
      );
    }
    next();
  };
};
