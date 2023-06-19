const router = require("express")();
const controller = require("../controllers/report");

router.post("/", controller.createReport);
router.get("/", controller.readAllReport);
router.patch("/:report_id", controller.checkOneReport);

module.exports = router;
