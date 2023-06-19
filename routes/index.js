const router = require("express")();
const report = require("./report");
const meeting = require("./meeting");

router.use("/report", report);
router.use("/meeting", meeting);

module.exports = router;
