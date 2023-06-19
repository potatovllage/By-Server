const { Meeting } = require("../models");

const createMeeting = async (req, res) => {
  const { school, class_id, name } = req.body;

  try {
    await Meeting.create({
      school,
      name,
      class_id,
    });
    res.status(201).json({
      message: "신청 완료 했습니댜.",
    });
  } catch (err) {
    res.status(400).json({
      message: "신청 실패",
    });
    console.error(err);
  }
};

const readAllMeeting = async (req, res) => {
  const school = req.body.school;

  try {
    const post = await Meeting.findAll({ where: { school, check: false } });

    return res.status(200).json(post);
  } catch (err) {
    res.status(404).json({
      messgae: "해당 데이터 없음",
    });
    console.error(err);
  }
};

const checkOneMeeting = async (req, res) => {
  const meeting_id = req.params.meeting_id;

  try {
    Meeting.update(
      {
        check: true,
      },
      { where: { id: meeting_id } }
    );

    res.status(200).json({
      message: "신청 확인됨",
    });
  } catch (err) {
    res.status(400).json({
      message: "신청 확인 실패",
    });
    console.error(err);
  }
};

module.exports = {
  createMeeting,
  checkOneMeeting,
  readAllMeeting,
};
