const { where } = require("sequelize");
const { Report } = require("../models");

const createReport = async (req, res) => {
  const { school, class_id, name, reason } = req.body;

  try {
    await Report.create({
      school,
      name,
      class_id,
      reason,
    });
    res.status(201).json({
      message: "신고 완료 했습니댜.",
    });
  } catch (err) {
    res.status(400).json({
      message: "신고 실패",
    });
    console.error(err);
  }
};

const readAllReport = async (req, res) => {
  const school = req.query.school;

  try {
    const post = await Report.findAll({ where: { school, check: false } });

    return res.status(200).json({ postList: post });
  } catch (err) {
    res.status(404).json({
      messgae: "해당 데이터 없음",
    });
    console.error(err);
  }
};

const checkOneReport = async (req, res) => {
  const report_id = req.params.report_id;

  try {
    Report.update(
      {
        check: true,
      },
      { where: { id: report_id } }
    );

    res.status(200).json({
      message: "신고 확인됨",
    });
  } catch (err) {
    res.status(400).json({
      message: "신고 확인 실패",
    });
    console.error(err);
  }
};

module.exports = {
  createReport,
  readAllReport,
  checkOneReport,
};
