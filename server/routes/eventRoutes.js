const express = require("express");
const {
  getAllEvent,
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
} = require("../controller/EventController");
const router = express.Router();

router.route("/").get(getAllEvent).post(createEvent);
router.route("/:id").get(getEvent).patch(updateEvent).delete(deleteEvent);
module.exports = router;
