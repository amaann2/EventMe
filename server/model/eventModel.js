const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "A Event must have a name"],
  },
  description: {
    type: String,
    required: [true, "A Event must have a description"],
  },
  coverPhoto: {
    type: String,
  },
  images: [String],
  organizer: {
    name: {
      type: String,
      required: [true, "Please provide the organizer's name"],
    },
    description: String,
    contact: {
      email: String,
      phone: String,
    },
  },
  maxAttendees: {
    type: Number,
    min: [0, "Maximum people can not be zero or negative"],
  },
  location: {
    type: String,
  },
  startTime: {
    type: Date,
    required: [true, "Please provide the start time"],
  },
  endTime: {
    type: Date,
    required: [true, "Please provide the end time"],
  },
  eventCategory: {
    type: String,
    enum: ["Concert", "Conference", "Party", "Workshop", "Wedding", "Other"],
  },
  mode: {
    type: String,
    enum: ["online", "offline"],
    required: [true, "Enter the mode of event "],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
