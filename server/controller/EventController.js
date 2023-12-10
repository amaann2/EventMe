const catchAsyncError = require("../middlewares/catchAsyncError");
const Event = require("../model/eventModel");
const AppError = require("../utils/appError");

exports.getAllEvent = catchAsyncError(async (req, res, next) => {
  const events = await Event.find();
  res.status(200).json({
    status: "Success",
    result: events.length,
    events,
  });
});
exports.createEvent = catchAsyncError(async (req, res, next) => {
  const newEvent = await Event.create(req.body);
  res.status(201).json({
    status: "Success",
    newEvent,
  });
});
exports.getEvent = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const event = await Event.findById(id);
  if (!event) {
    return next(new AppError("There is no event with that id", 404));
  }
  res.status(200).json({
    status: "Success",
    event,
  });
});
exports.updateEvent = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const event = await Event.findById(id);
  if (!event) {
    return next(new AppError("There is no event with that id", 404));
  }
});
exports.deleteEvent = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const event = await Event.findById(id);
  if (!event) {
    return next(new AppError("There is no event with that id", 404));
  }
});
