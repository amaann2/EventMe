const express = require("express");
const {
  getAllEvent,
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
} = require("../controller/EventController");
const {
  isAuthenticate,
  isAuthorized,
} = require("../middlewares/authentication");
const router = express.Router();

router
  .route("/")
  .get(getAllEvent)
  .post(isAuthenticate, isAuthorized("organizer", "admin"), createEvent);
router.route("/:id").get(getEvent).patch(updateEvent).delete(deleteEvent);
module.exports = router;
