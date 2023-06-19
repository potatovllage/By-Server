const router = require("express")();
const controller = require("../controllers/meeting");

router.post("/", controller.createMeeting);
router.get("/", controller.readAllMeeting);
router.patch("/:meeting_id", controller.checkOneMeeting);

module.exports = router;
